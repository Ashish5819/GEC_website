# Global Education & Careers — Codex Project Instructions

## 1. Project Identity

This project is the website for Global Education & Careers, abbreviated as GEC.

Confirmed information:

- Organisation: Global Education & Careers
- Abbreviation: GEC
- Owner: Dr. Abbas Ali
- Phone: 7093377801
- Email: professorabbasali854@gmail.com
- Intended base city: Hyderabad, Telangana, India
- Exact office address: unconfirmed
- Legal registration: not yet registered
- Legal structure: not selected
- Operational status: pre-launch
- Launch date: unconfirmed

Do not alter confirmed information without explicit owner approval recorded in DECISIONS_LOG.md.

## 2. Authoritative Planning Files

Before making a significant change, read the relevant planning files.

Authoritative sources:

- Business facts and canonical form matrix: PROJECT_REQUIREMENTS.md
- Routes: SITEMAP.md
- Public wording and content rules: CONTENT_REQUIREMENTS.md
- Design direction and tokens: DESIGN_DIRECTION.md
- Technical architecture and implementation plan: DEVELOPMENT_PLAN.md
- Security and privacy requirements: SECURITY_CHECKLIST.md
- Decision history and approval status: DECISIONS_LOG.md
- Project overview and working sequence: README.md
- Beginner starting guidance: START_HERE.md

When documents appear inconsistent:

1. Do not silently choose one.
2. Follow the listed source authority.
3. Report the conflict.
4. Do not modify unrelated documents.
5. Record major approved changes in DECISIONS_LOG.md.

## 3. Dummy and Unconfirmed Content Rule

Every unconfirmed or invented public-facing item must end exactly with:

(D)

Examples include:

- invented names
- dummy biographies
- sample addresses
- office hours
- prices
- statistics
- partnerships
- university names used as examples
- testimonials
- event details
- social-media links
- service commitments
- design values not yet approved

Rules:

- Preserve the exact uppercase marker “(D)”.
- Do not use (d), [D], [d], placeholder, or coming soon as replacements.
- Never remove “(D)” without explicit approval.
- Dummy content must never reach production.
- Perform a complete “(D)” scan before any production release.
- Confirmed information must not be marked “(D)” unless the surrounding statement itself remains proposed.

## 4. Planned Does Not Mean Operational

Do not claim that GEC is already operating.

Do not claim that any proposed service is:

- currently active
- fully staffed
- priced
- accredited
- officially partnered
- guaranteed
- available at a confirmed office
- supported by confirmed schedules

Do not guarantee:

- university admission
- visas
- scholarships
- loans
- jobs
- work permits
- settlement
- immigration outcomes
- appointment availability

## 5. Version 1 Scope

Follow the Version 1 scope defined in the planning documents.

Do not introduce without explicit approval:

- student portal
- student accounts
- online payments
- application document uploads
- passport uploads
- Aadhaar uploads
- bank-statement uploads
- medical-document uploads
- AI chatbot
- AI recommendations
- automated visa decisions
- automated admission decisions
- public newsletter activation
- unsupported integrations
- unnecessary microservices

## 6. Approved Technical Direction

The planned technical direction includes:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase PostgreSQL
- Supabase Authentication
- Git and a future private GitHub repository
- Vercel for future deployment

Some packages and services remain proposed.

Do not install or connect optional tools unless the task explicitly authorises them.

Do not hard-code package versions from memory. Use the current supported stable release when installation is explicitly approved.

## 7. Security Rules

Never:

- commit secrets
- print secrets
- expose API keys
- expose service-role keys
- expose database credentials
- expose authentication tokens
- expose private keys
- expose recovery codes
- store secrets in site_settings
- use production data for local or preview testing
- create shared staff accounts
- disable security controls to make a feature work
- accept sensitive document uploads
- trust client-side validation alone

Private data must use:

- server-side validation
- row-level security
- authorised role checks
- rate limiting
- safe error handling
- audit logging where planned
- least-privilege access

## 8. Form Rules

PROJECT_REQUIREMENTS.md Section 20.1 is the authoritative internal form matrix.

Final field approval remains pending.

Forms must:

- use visible labels
- identify required fields
- use client-side and server-side validation
- use input-length limits
- record submission source
- record consent type
- record consent timestamp
- record consent-text version
- link to the privacy policy
- provide safe success and failure states
- avoid marketing consent by default
- avoid sensitive document collection

Preferred dates and times are requests only.

A public form must not automatically create a confirmed appointment.

Newsletter collection remains inactive until separately approved.

## 9. Route Rules

SITEMAP.md is authoritative for route-name consistency.

The partnership administration route is:

/admin/partnership-enquiries

Do not silently introduce a conflicting route.

Administrative routes must not appear in public navigation.

Draft, preview, private-search, and administrative routes must not be publicly indexed.

## 10. Content Verification

Time-sensitive or externally sourced information requires verification before publication.

This includes:

- visa information
- scholarships
- tuition fees
- living costs
- application deadlines
- test schedules
- work rights
- post-study pathways
- event details
- speaker information
- university information

Record official source and verification date where planned.

Do not invent facts to fill content gaps.

## 11. Design Rules

Follow DESIGN_DIRECTION.md.

Design remains proposed until approved.

Do not:

- replace the planned design direction without approval
- introduce unrelated visual systems
- use excessive animation
- sacrifice readability
- ignore keyboard navigation
- ignore reduced-motion preferences
- publish untested contrast combinations

Maintain responsive and accessible behaviour.

## 12. Change-Control Rules

Before editing:

1. Read the task.
2. Read relevant planning files.
3. List intended files to change.
4. Confirm scope.
5. Preserve unrelated content.
6. Record baseline state where appropriate.

During editing:

- make small reviewable changes
- avoid broad rewrites
- avoid destructive commands
- avoid unrelated formatting changes
- do not overwrite user work
- do not invent approvals
- do not silently resolve contradictions

After editing:

- list files changed
- summarise exact changes
- run approved checks
- report failures honestly
- report “(D)” count changes when planning or content files are modified
- confirm no unauthorised file changed

## 13. Command Safety

Do not run destructive commands without explicit approval.

Extra caution is required for commands containing:

- rm
- rmdir
- del
- remove
- clean
- reset
- force
- drop
- truncate
- format
- destroy
- overwrite
- database reset
- migrate reset
- delete

Before any destructive action, confirm:

- affected path
- affected environment
- backup status
- reversibility
- necessity
- data impact

## 14. Git Rules

Until explicitly authorised:

- do not create a remote
- do not push
- do not pull
- do not fetch
- do not force-push
- do not rewrite history
- do not delete branches
- do not commit secrets
- do not commit environment files

Use small, descriptive commits after commit creation is approved.

Do not create a commit when Git identity is unknown or unapproved.

## 15. Environment Rules

Use the active project folder:

D:\Projects\GEC_website

Do not perform development in the OneDrive source folder.

The verified planning backup is:

D:\Projects\GEC_Backups\GEC_website_planning_backup_2026-08-01

Do not modify the backup during normal development.

Use local project dependencies rather than global npm packages unless explicitly justified and approved.

## 16. Plugins, Skills, and Integrations

No plugin, custom skill, or MCP server is required for initial development.

Do not install or enable one without explicit approval.

A future custom skill may be considered only after a genuinely repetitive workflow has been identified.

Figma integration is optional and should be considered only when approved Figma designs exist.

GitHub integration must wait until the private repository is deliberately created.

Supabase and Vercel plugins are not required.

## 17. Current Status

Planning documentation is complete.

The project is in controlled technical setup.

Git may be initialised locally.

Next.js has not yet been initialised.

No database exists.

No authentication system exists.

No external development service is connected.

No production deployment exists.

Website coding has not begun.

## 18. Required Completion Report

For every task, report:

- files modified
- files created
- files deleted
- commands run
- checks performed
- test results
- “(D)” marker changes where relevant
- unauthorised changes
- package installations
- external connections
- secrets or credentials created
- recommended next action
