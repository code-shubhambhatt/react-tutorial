Role-Based Access Control (RBAC) using pycasbin
=======================================================

1\. Overview
------------

This document describes the RBAC design used in the MadatCloud application to control feature access based on user roles.

The system enforces authorization at the **backend API level**, with the backend acting as the **single source of truth**.\
The frontend only reflects permissions returned by the backend and does not make authorization decisions.

* * * * *

2\. Roles Supported
-------------------

The system supports three roles:

-   **Free**

-   **Basic**

-   **Pro**

Roles are treated as independent in the current design. Each role has explicitly defined permissions without inheritance.

* * * * *

3\. Core Authorization Model
----------------------------

Authorization decisions are based on three parameters:

-   **Role (Subject)** -- identifies who is making the request

-   **Capability (Object)** -- identifies what feature is being accessed

-   **Action** -- identifies how the feature is accessed (GET / POST)

Casbin evaluates these parameters and determines whether the request is allowed or denied.

* * * * *

4\. Capability-Based Authorization
----------------------------------

Permissions are defined using **capabilities**, not API routes.

### Rationale

-   API routes may change over time

-   Capabilities represent stable, logical features

-   Multiple APIs can map to a single capability

### Defined Capabilities

| Capability | Description |
| --- | --- |
| `github.connect` | GitHub account connection |
| `github.repos.read` | Repository listing |
| `github.branches.read` | Branch listing |
| `github.sync` | Repository synchronization |

* * * * *

5\. API to Capability Mapping
-----------------------------

Each API endpoint maps to a single capability and action.

| API Endpoint | HTTP Method | Capability | Action |
| --- | --- | --- | --- |
| `/github/install` | GET | `github.connect` | GET |
| `/github/repos` | GET | `github.repos.read` | GET |
| `/github/branches` | GET | `github.branches.read` | GET |
| `/github/repos/sync` | POST | `github.sync` | POST |

This mapping ensures consistent authorization regardless of UI behavior.

* * * * *

6\. Role-Permission Matrix (Explicit)
-------------------------------------

### Free Role

| Capability | Action | Access |
| --- | --- | --- |
| github.connect | GET | Denied |
| github.repos.read | GET | Denied |
| github.branches.read | GET | Denied |
| github.sync | POST | Denied |

* * * * *

### Basic Role

| Capability | Action | Access |
| --- | --- | --- |
| github.connect | GET | Allowed |
| github.repos.read | GET | Allowed |
| github.branches.read | GET | Allowed |
| github.sync | POST | Denied |

* * * * *

### Pro Role

| Capability | Action | Access |
| --- | --- | --- |
| github.connect | GET | Allowed |
| github.repos.read | GET | Allowed |
| github.branches.read | GET | Allowed |
| github.sync | POST | Allowed |

* * * * *

7\. Casbin Model Configuration
------------------------------

The Casbin authorization model is stored as a **static configuration file** (`rbac_model.conf`).

### Purpose of the Model

-   Defines the structure of authorization requests

-   Defines the structure of policy rules

-   Defines how requests are matched against policies

-   Enforces deny-by-default behavior

### Storage Decision

-   The model remains in the codebase and is version-controlled

-   It is not stored in MongoDB, as it defines authorization logic rather than data

* * * * *

8\. MongoDB Authorization Storage
---------------------------------

### 8.1 User Roles

User roles are stored in a dedicated collection.

Example:

`{
  "user_id": "<uuid>",
  "role": "basic"
}`

Roles are resolved only on the backend and are never accepted from the frontend.

* * * * *

### 8.2 Authorization Policies

Authorization rules are stored as policy documents.

Example:

`{
  "ptype": "p",
  "v0": "basic",
  "v1": "github.connect",
  "v2": "GET"
}`

Policies define which role can perform which action on which capability.

Policies can be added or removed without modifying application code.

* * * * *

9\. Authorization Flow
----------------------

1.  A user is authenticated and a session is established

2.  An API request is received

3.  The backend resolves the user's role from the database

4.  The API endpoint is mapped to a capability and action

5.  Casbin evaluates the request against stored policies

6.  If authorized, the request proceeds

7.  If unauthorized, the backend returns HTTP **403 Forbidden**

* * * * *

10\. Frontend Behavior
----------------------

-   The frontend does not determine permissions

-   UI elements are shown, hidden, or disabled based on backend responses

-   Unauthorized backend access is always blocked, even if UI restrictions are bypassed

* * * * *

11\. Extensibility
------------------

-   New capabilities can be introduced without changing existing roles

-   Permissions can be updated by modifying policy data in MongoDB

-   Role inheritance can be introduced later without redesigning the authorization model
