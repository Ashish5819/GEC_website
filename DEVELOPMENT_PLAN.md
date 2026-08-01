# Global Education & Careers Website Development Plan

**Document Status:** Initial Draft  
**Project:** Global Education & Careers Website  
**Organisation:** Global Education & Careers  
**Abbreviation:** GEC  
**Version:** 1.0  
**Last Updated:** 30 July 2026  

---

## 1. Purpose of This Document

This document defines how the approved requirements, sitemap, content plan, and design direction will be converted into a functional website.

It covers:

- Development principles
- Recommended technology
- Local development setup
- Project structure
- Frontend development
- Backend development
- Database development
- Authentication
- Administrative dashboard
- Forms
- Email notifications
- WhatsApp integration
- Content management
- Search-engine optimisation
- Accessibility
- Testing
- Version control
- Deployment
- Launch preparation
- Maintenance
- Codex working rules

This document is a plan only.

No software installation, project initialisation, database creation, account creation, or deployment should occur while preparing this file.

---

## 2. Development Objective

The objective is to build a professional, responsive, secure, maintainable, and accessible website for Global Education & Careers.

The first version should allow GEC to:

1. Present its organisation, leadership, destinations, programs, and services.
2. Collect counselling enquiries.
3. Allow visitors to request counselling appointments.
4. Receive and manage institutional partnership enquiries.
5. Publish destination information, articles, scholarships, events, and FAQs.
6. Manage leads through a private administrative dashboard.
7. Send acknowledgement and staff-notification emails.
8. Provide click-to-call and WhatsApp contact options.
9. Support search-engine discovery.
10. Provide a technical foundation for later expansion.

---

## 3. Version 1 Scope

Version 1 should include:

### Public Website

- Home
- About GEC
- Founder
- Leadership and Advisors
- Why Choose GEC
- Study Abroad overview
- Country pages
- Programs
- Services
- University Partnerships
- Resources and Blog
- Scholarship information
- Events and Webinars
- FAQs
- Contact
- Book Counselling
- Legal pages
- Utility pages

### Functional Features

- Responsive navigation
- Dropdown menus
- Counselling enquiry form
- Appointment-request form
- General contact form
- University-partnership form
- Newsletter form (D)
- Click-to-call
- WhatsApp contact (D)
- Email acknowledgement
- Internal email notification
- Form validation
- Spam protection
- Search-engine metadata
- XML sitemap
- Robots configuration
- Basic analytics (D)

### Administrative Features

- Secure staff login
- Dashboard
- Enquiry list
- Enquiry detail
- Search and filters
- Status updates
- Counsellor assignment
- Internal notes
- Follow-up scheduling
- Appointment management
- Partnership enquiries
- Article management
- Scholarship management
- Event management
- FAQ management
- CSV export
- Staff roles
- Audit records for important actions

---

## 4. Features Excluded from Version 1

Version 1 should not include:

- Student login accounts
- Full student portal
- Passport uploads
- Aadhaar uploads
- Bank-statement uploads
- Medical-document uploads
- Financial-document storage
- University application submission on behalf of students
- Online payments
- Payment gateway
- Automated visa decisions
- Automated admission decisions
- AI university matching
- AI course recommendations
- AI chatbot
- Employment placement system
- Mobile application
- Multi-branch management
- Advanced CRM automation
- Public counsellor ratings
- Real-time chat between students and counsellors

These may be evaluated in later versions.

---

## 5. Recommended Architecture

Use a single full-stack web application for Version 1.

### Proposed Architecture

Website Visitor
       │
       ▼
Next.js Application
       │
       ├── Public Pages
       ├── Forms
       ├── Server-Side Validation
       ├── Administrative Interface
       ├── Search-Engine Metadata
       └── Protected Server Operations
       │
       ▼
Supabase
       │
       ├── PostgreSQL Database
       ├── Staff Authentication
       ├── Row-Level Security
       └── Optional Media Storage
       │
       ▼
Supporting Services
       ├── Email Notification Provider (D)
       ├── WhatsApp Contact Link (D)
       ├── Analytics Provider (D)
       ├── Spam-Protection Provider (D)
       └── Error-Monitoring Provider (D)

This project should not use a microservice architecture for Version 1.

---

## 6. Recommended Technology Stack

### 6.1 Web Framework

Next.js using the App Router.

Use for:

- Public pages
- Layouts
- Navigation
- Server-rendered content
- Dynamic routes
- Forms
- Server operations
- Administrative pages
- SEO metadata
- Sitemap generation

### 6.2 Programming Language

TypeScript.

Use TypeScript for:

- Page components
- Server functions
- Form types
- Database types
- Validation schemas
- Administrative data
- Shared interfaces

Strict type checking should be enabled.

### 6.3 Styling

Tailwind CSS.

Use for:

- Responsive layouts
- Design tokens
- Spacing
- Typography
- Buttons
- Cards
- Forms
- States
- Administrative layouts

The project should define reusable design tokens rather than repeating arbitrary values.

### 6.4 Database

Supabase PostgreSQL.

Use for:

- Enquiries
- Appointments
- Staff profiles
- Internal notes
- Follow-up records
- Destination content
- Service content
- Articles
- Scholarships
- Events
- FAQs
- Partnership enquiries
- Audit records

### 6.5 Authentication

Supabase Authentication.

Use only for authorised staff.

The public website should not require visitors to create accounts in Version 1.

### 6.6 File Storage

Supabase Storage may be used for approved website images and content assets. (D)

Sensitive student-document storage must not be included in Version 1.

### 6.7 Hosting

Vercel.

Use for:

- Preview deployments
- Production deployment
- Environment variables
- Domain connection
- Server execution
- Deployment logs

### 6.8 Source-Code Hosting

GitHub.

Use for:

- Project backup
- Version history
- Branches
- Pull requests
- Change review
- Deployment integration
- Recovery of earlier versions

### 6.9 Email Service

Resend may be evaluated as the transactional email provider. (D)

Alternative providers may include:

- Postmark (D)
- Amazon SES (D)
- SendGrid (D)

The final provider should be selected based on cost, deliverability, regional requirements, and account ownership.

### 6.10 Validation

Zod may be used for shared validation schemas. (D)

Validation must occur on both:

- Client side for usability
- Server side for security

### 6.11 Forms

Use accessible native form controls wherever practical.

A form library may be introduced only when it provides a clear maintainability benefit. (D)

### 6.12 Testing

Recommended testing categories:

- Unit tests
- Component tests
- Integration tests
- End-to-end tests
- Accessibility tests
- Security checks
- Manual browser testing

Suggested tools may include:

- Vitest (D)
- React Testing Library (D)
- Playwright (D)
- Axe accessibility testing (D)

Exact tools and versions must be selected during implementation.

### 6.13 Error Monitoring

Sentry may be evaluated for production error monitoring. (D)

No monitoring service should collect more personal information than necessary.

### 6.14 Analytics

Privacy-conscious analytics should be preferred. (D)

Possible options:

- Vercel Web Analytics (D)
- Google Analytics with consent controls (D)
- Plausible Analytics (D)

The selected provider must be documented in the privacy policy.

---

## 7. Account Ownership

The following accounts should be owned by GEC or Dr. Abbas Ali:

- GitHub account
- GitHub repository
- Domain registrar account
- Vercel account
- Supabase account
- Transactional email account
- Analytics account
- Google Business account
- Professional email account
- WhatsApp Business account
- Social-media accounts
- Error-monitoring account
- Spam-protection account

No outside developer should be the sole owner of essential project accounts.

Recovery email addresses and multi-factor authentication should be configured.

---

## 8. Local Development Environment

The initial development computer uses Windows.

The project folder is currently:

C:\Users\ashis\OneDrive\Documents\GEC_website

This location is currently confirmed from the project setup.

### Future Required Software

The following software will be installed only when implementation begins:

- Current stable Node.js Long-Term Support release (D)
- Git
- Visual Studio Code
- ChatGPT Codex
- A supported web browser
- Optional Supabase CLI (D)
- Optional GitHub Desktop (D)

### OneDrive Consideration

Because the project is stored inside OneDrive, file synchronisation could occasionally interfere with generated project folders or large dependency directories.

Before framework installation, consider moving the project to:

C:\Projects\GEC_website (D)

Alternative:

C:\Users\ashis\source\repos\GEC_website (D)

The move should occur only after the planning files are backed up.

---

## 9. Beginner-Safe Setup Sequence

The first implementation stage should follow this order:

1. Review all planning files.
2. Create a backup copy of the planning folder.
3. Confirm the preferred local project location.
4. Install Git.
5. Install the current stable Node.js Long-Term Support release.
6. Confirm Node.js installation.
7. Confirm package-manager installation.
8. Initialise Git.
9. Create a private GitHub repository.
10. Create an initial planning-document commit.
11. Create a development branch.
12. Initialise the Next.js project.
13. Start the local development server.
14. Confirm that the default page opens.
15. Add the approved design tokens.
16. Build the first homepage shell.
17. Run checks.
18. Commit the stable milestone.

Each stage should be completed and verified before moving to the next stage.

---

## 10. Future Example Setup Commands

The following commands are examples only and must not be executed while preparing this document.

### Check Node.js

node --version
npm --version

### Check Git

git --version

### Initialise a Future Next.js Project

The exact command should be generated from the current official Next.js installation instructions when implementation begins. (D)

Do not copy an outdated project-creation command from this planning document.

---

## 11. Proposed Repository Strategy

### Repository Name

gec-website (D)

### Repository Visibility

Private during development. (D)

### Default Branch

main

### Development Branch

develop (D)

### Feature Branch Examples

feature/homepage (D)
feature/navigation (D)
feature/counselling-form (D)
feature/admin-dashboard (D)
feature/country-pages (D)
fix/mobile-navigation (D)
fix/form-validation (D)

### Branch Rule

Do not develop major features directly on the production branch.

---

## 12. Git Workflow

Recommended workflow:

1. Start from an updated development branch.
2. Create a feature branch.
3. Make one focused change.
4. Review the changed files.
5. Run checks and tests.
6. Create a clear commit.
7. Push the branch.
8. Open a pull request.
9. Review the preview deployment.
10. Approve or request corrections.
11. Merge after acceptance.
12. Delete the completed feature branch.

### Suggested Commit Examples

docs: complete development planning document (D)
feat: add responsive homepage header (D)
feat: create counselling enquiry form (D)
fix: correct mobile navigation focus handling (D)
test: add enquiry validation tests (D)

---

## 13. Pull-Request Review Requirements

Each pull request should include:

- Purpose
- Changed pages
- Changed files
- Screenshots
- Mobile screenshots
- Test results
- Accessibility notes
- Security considerations
- Dummy-content occurrences
- Known limitations
- Preview link
- Rollback considerations

No change should be merged only because it compiles.

---

## 14. Proposed Project Structure

The following structure is recommended when implementation begins:

GEC_website/
├── docs/
│   ├── PROJECT_REQUIREMENTS.md
│   ├── SITEMAP.md
│   ├── CONTENT_REQUIREMENTS.md
│   ├── DESIGN_DIRECTION.md
│   ├── DEVELOPMENT_PLAN.md
│   ├── SECURITY_CHECKLIST.md
│   ├── DECISIONS_LOG.md
│   └── README.md
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── documents/
│   └── social/
│
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── layout.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── admin/
│   │   ├── cards/
│   │   ├── forms/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── content/
│   │   ├── destinations/
│   │   ├── services/
│   │   ├── programs/
│   │   └── legal/
│   │
│   ├── lib/
│   │   ├── auth/
│   │   ├── database/
│   │   ├── email/
│   │   ├── security/
│   │   ├── validation/
│   │   └── utilities/
│   │
│   ├── styles/
│   ├── types/
│   └── config/
│
├── supabase/
│   ├── migrations/
│   └── seed/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── end-to-end/
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── next.config.ts

This is a proposed structure and may be refined during implementation. (D)

---

## 15. Documentation Location

Before source-code development, the existing planning files should be moved into:

docs/ (D)

This should happen only after:

- Git is initialised
- A backup exists
- The move is reviewed
- Internal links are updated

The file contents must not be lost during reorganisation.

---

## 16. Frontend Development Principles

Frontend code should:

- Use reusable components
- Use semantic HTML
- Use server components where appropriate
- Limit unnecessary client-side JavaScript
- Use client components only for interactions
- Follow the approved design tokens
- Support keyboard navigation
- Support screen readers
- Handle loading states
- Handle empty states
- Handle error states
- Support responsive layouts
- Avoid duplicated markup
- Avoid oversized components
- Avoid business logic inside visual components

---

## 17. Reusable Component Plan

### Layout Components

- TopContactBar
- Header
- DesktopNavigation
- MobileNavigation
- Footer
- PageContainer
- Section
- Breadcrumbs
- CallToAction

### Button Components

- PrimaryButton
- SecondaryButton
- TextLink
- IconButton
- LoadingButton

### Card Components

- DestinationCard
- ServiceCard
- ProgramCard
- ArticleCard
- ScholarshipCard
- EventCard
- TestimonialCard
- AdvisorCard
- StatisticCard

### Form Components

- TextInput
- EmailInput
- PhoneInput
- SelectInput
- TextArea
- Checkbox
- DateInput
- TimeInput
- FormError
- FormSuccess
- ConsentField

### Content Components

- PageHero
- SectionHeading
- RichText
- TableOfContents
- FAQAccordion
- ProcessTimeline
- QuickFacts
- DisclaimerPanel
- LastUpdated
- RelatedContent

### Admin Components

- AdminSidebar
- AdminHeader
- SummaryCard
- DataTable
- FilterBar
- StatusBadge
- NotesPanel
- AuditTimeline
- EmptyState
- ConfirmationDialog

---

## 18. Page-Template Development

Create shared templates for:

- Standard public page
- Country page
- Service page
- Program page
- Field page
- Article page
- Scholarship page
- Event page
- Legal page
- Admin list page
- Admin detail page

Templates should separate structure from content.

---

## 19. Routing Plan

Use file-system routing based on the approved sitemap.

### Static Public Routes

Examples:

/about
/about/founder
/study-abroad
/services
/contact
/book-counselling

### Dynamic Content Routes

Examples:

/resources/blog/[article-slug]
/resources/scholarships/[scholarship-slug]
/resources/events/[event-slug]
/admin/enquiries/[enquiry-id]

### Protected Routes

All routes under:

/admin

must require authorised staff authentication except the login page.

---

## 20. Content Storage Strategy

Use a staged approach.

### Phase A: Initial Prototype

Store approved static content in structured local files. (D)

Possible formats:

- TypeScript data objects (D)
- JSON (D)
- Markdown or MDX (D)

### Phase B: Content Management

Database-managed content types:

- Destinations
- Services
- Programs
- Articles
- Scholarships
- Events
- FAQs
- Testimonials (D)
- Leadership and advisor profiles (D)
- Approved non-secret site settings (D)

File-managed or documentation-managed content until separately approved:

- Legal drafts
- Complex long-form policy material
- Unpublished planning content
- Dummy examples
- Deployment configuration
- Secret configuration

### Reason for Staged Approach

This allows the design and public pages to be validated before building a complex content-management system.

---

## 21. Database Design Principles

The database should:

- Use clear table names
- Use generated unique identifiers
- Use timestamps
- Track creation and update dates
- Track publication status
- Track staff ownership
- Apply row-level security
- Avoid duplicate personal data
- Avoid storing sensitive information unnecessarily
- Support audit records
- Support soft deletion where appropriate
- Use indexes for frequently searched fields
- Use database migrations

---

## 22. Proposed Database Tables

### 22.1 enquiries

Suggested fields:

- id
- full_name
- phone
- email
- city
- current_qualification
- current_institution
- graduation_year
- preferred_study_level
- preferred_country
- preferred_course
- intended_intake
- budget_range
- scholarship_required
- loan_required
- english_test_status
- work_experience
- preferred_counselling_mode
- preferred_date
- preferred_time
- message
- enquiry_category (D)
- subject (D)
- consent_to_contact
- consent_type (D)
- consent_timestamp
- consent_text_version (D)
- privacy_policy_version (D)
- source_page
- source_identifier (D)
- status
- assigned_staff_id
- created_at
- updated_at
- deleted_at

`subject` and `enquiry_category` primarily support General Contact submissions. (D)

Fields not relevant to a particular form may remain null. Form-specific required and optional rules are controlled by the Canonical Version 1 Form Matrix. The table must not make every canonical field mandatory for every form.

Database nullability must reflect the form-specific matrix rather than treating all enquiry fields as globally required.

### 22.2 appointments

Suggested fields:

- id
- enquiry_id
- assigned_staff_id
- appointment_date
- start_time
- duration_minutes
- counselling_mode
- meeting_location
- meeting_link
- status
- cancellation_reason
- created_at
- updated_at

### 22.3 enquiry_notes

Suggested fields:

- id
- enquiry_id
- staff_id
- note
- created_at
- updated_at

### 22.4 follow_ups

Suggested fields:

- id
- enquiry_id
- assigned_staff_id
- due_at
- completed_at
- status
- note
- created_at

### 22.5 staff_profiles

Suggested fields:

- id
- auth_user_id
- full_name
- email
- phone
- role
- active
- created_at
- updated_at

### 22.6 destinations

Suggested fields:

- id
- name
- slug
- summary
- hero_image
- content
- status
- seo_title
- seo_description
- last_verified_at
- published_at
- created_at
- updated_at

### 22.7 services

Suggested fields:

- id
- name
- slug
- summary
- content
- status
- seo_title
- seo_description
- last_reviewed_at (D)
- reviewed_by_staff_id (D)
- published_at
- created_at
- updated_at

Services do not always require an external source, but they must be reviewed to ensure they match actual GEC operations.

### 22.8 programs

Suggested fields:

- id
- name
- slug
- level
- summary
- content
- status
- verified_source (D)
- last_verified_at (D)
- verified_by_staff_id (D)
- created_at
- updated_at

The existing programs table remains the content source for:

/admin/programs

Program administration should support draft, review, approved, published, and archived states. (D)

Verification metadata applies when program information comes from an external institution or official source.

### 22.9 articles

Suggested fields:

- id
- title
- slug
- excerpt
- content
- category
- author_id
- featured_image
- status
- seo_title
- seo_description
- verified_source
- last_verified_at
- published_at
- created_at
- updated_at

### 22.10 scholarships

Suggested fields:

- id
- name
- slug
- provider
- country
- study_level
- field
- eligibility
- funding_summary
- deadline
- official_source
- last_verified_at
- status
- published_at
- created_at
- updated_at

### 22.11 events

Suggested fields:

- id
- title
- slug
- description
- event_date
- start_time
- time_zone
- mode
- venue
- meeting_link
- speaker
- capacity
- registration_status
- verified_source (D)
- last_verified_at (D)
- verified_by_staff_id (D)
- status
- created_at
- updated_at

Event verification applies to the event date, time, venue or meeting mode, speaker identity, and registration status.

### 22.12 event_registrations

Suggested fields:

- id
- event_id
- full_name
- phone
- email
- city
- consent
- registered_at

- current_qualification (D)
- questions_for_speaker (D)
- accessibility_requirements (D)
- source_identifier (D)
- consent_type (D)
- consent_timestamp
- consent_text_version (D)
- privacy_policy_version (D)
- registration_status (D)
- updated_at

Suggested internal registration statuses:

- pending (D)
- confirmed (D)
- declined (D)
- cancelled (D)
- attended (D)
- no-show (D)

The status vocabulary remains proposed. Registration submission does not guarantee attendance. Dummy events must not accept real registrations. Accessibility requirements must be visible only to staff who require them. The field should collect only practical accommodation information and must not request medical diagnosis details.

Public registration form location:

/resources/events/[event-slug] (D)

Administrative registration view:

/admin/events/[event-id]/registrations (D)

The existing event_registrations table stores registration data.

Staff must not receive access to registration data unless their role requires it.

### 22.13 faqs

Suggested fields:

- id
- question
- answer
- category
- display_order
- status
- verified_source (D)
- last_verified_at (D)
- verified_by_staff_id (D)
- created_at
- updated_at

Only time-sensitive or externally sourced FAQs require official-source verification.

### 22.14 partnership_enquiries

Suggested fields:

- id
- institution_name
- country
- institution_website
- contact_name
- designation
- official_email
- phone
- partnership_interest
- proposal
- consent
- source_identifier (D)
- consent_type (D)
- consent_timestamp
- consent_text_version (D)
- privacy_policy_version (D)
- review_status (D)
- status
- assigned_staff_id
- created_at
- updated_at

Submitting this form does not create a partnership. Records remain private. Publication or partnership claims require separate documented approval. `review_status` is an internal workflow field and must not imply an approved partnership.

Suggested internal review statuses:

- new (D)
- under-review (D)
- information-requested (D)
- declined (D)
- closed (D)

### 22.15 audit_logs

Suggested fields:

- id
- staff_id
- action
- entity_type
- entity_id
- metadata
- created_at

### 22.16 email_logs

Suggested fields:

- id
- recipient
- template_name
- related_entity_type
- related_entity_id
- delivery_status
- provider_message_id
- created_at

### 22.17 testimonials (D)

Suggested fields:

- id
- testimonial_text
- person_name
- person_role
- city
- country
- photograph_url
- consent_confirmed
- consent_record_reference
- evidence_reference
- verified_by_staff_id (D)
- last_verified_at (D)
- display_order
- status
- published_at
- created_at
- updated_at
- archived_at

No testimonial may be published unless consent and evidence have been verified.

### 22.18 leadership_profiles (D)

Suggested fields:

- id
- profile_type
- full_name
- designation
- biography
- photograph_url
- linkedin_url
- display_order
- approval_status
- consent_confirmed
- verified_by_staff_id (D)
- last_verified_at (D)
- status
- published_at
- created_at
- updated_at
- archived_at

Suggested profile types:

- founder
- leadership
- advisor

Unconfirmed advisors and dummy profiles must not be published.

### 22.19 site_settings (D)

Suggested fields:

- id
- setting_key
- setting_value
- setting_type
- public_visibility
- approval_status
- updated_by
- created_at
- updated_at

The table may contain only approved non-secret business and presentation settings.

It must not contain:

- Passwords
- API keys
- Authentication tokens
- Service-role keys
- Database credentials
- Private keys
- Recovery codes
- Deployment secrets
- Email-provider credentials
- DNS credentials

Security-sensitive configuration must remain in approved deployment environment variables or provider settings.

The final schema should be reviewed before database creation.

---

## 23. Enquiry Status Workflow

Suggested enquiry statuses:

New
Contacted
Counselling Scheduled
Counselling Completed
Documentation Pending
Application Planning
Application in Progress
Application Submitted
Offer Received
Visa Preparation
Visa Decision Received
Travel Planned
Closed
Not Interested
Duplicate
Spam

The status list should be reviewed to avoid implying that GEC performs services not yet operational.

---

## 24. Authentication Plan

Only staff members should authenticate in Version 1.

### Staff Login Requirements

- Email and password or passwordless email link (D)
- Multi-factor authentication for administrators where supported (D)
- Secure password requirements
- Login rate limiting
- Session expiration
- Account deactivation
- Password recovery
- Audit logging
- No shared accounts

### Public Visitors

Public visitors should not need accounts to:

- Browse pages
- Submit enquiries
- Request counselling
- Register for events
- Submit partnership enquiries

---

## 25. Role-Based Access Plan

Suggested roles:

### Administrator (D)

May:

- Manage staff
- View all enquiries
- Assign counsellors
- Manage content
- Export data
- View audit logs
- Change settings

### Senior Counsellor (D)

May:

- View assigned and team enquiries
- Assign enquiries where authorised
- Add notes
- Schedule follow-ups
- Update statuses
- View appointments

### Counsellor (D)

May:

- View assigned enquiries
- Add notes
- Schedule follow-ups
- Update allowed statuses
- Manage assigned appointments

### Content Editor (D)

May:

- Draft content
- Edit content
- Preview content
- Submit content for review
- Not manage staff or enquiry data

### Read-Only Viewer (D)

May:

- View approved dashboards and reports
- Not edit or export sensitive data unless explicitly authorised

The final permissions must follow least-privilege principles.

---

## 26. Row-Level Security Plan

Database access rules should ensure:

- Public users cannot read enquiry records.
- Public users can submit only validated form data through controlled server operations.
- Counsellors can access only permitted enquiries.
- Content editors cannot access student enquiries.
- Read-only users cannot modify records.
- Administrators receive only required privileges.
- Audit records cannot be casually modified.
- Published content can be read publicly.
- Draft content remains private.

Row-level security must be tested before production use.

---

## 27. Form Processing Workflow

### Counselling Form Workflow

Visitor completes form
        │
        ▼
Client-side validation
        │
        ▼
Server-side validation
        │
        ▼
Spam and rate-limit checks
        │
        ▼
Consent verification
        │
        ▼
Database submission
        │
        ├── Create enquiry
        ├── Create audit record
        ├── Send visitor acknowledgement
        └── Send GEC staff notification
        │
        ▼
Show success page

### Failure Behaviour

If submission fails:

- Preserve the visitor’s entered information where safe
- Show a clear error
- Log the technical failure without sensitive details
- Provide phone and email alternatives
- Avoid creating duplicate records

## 27.1 Canonical Form Implementation Mapping

PROJECT_REQUIREMENTS.md contains the authoritative Version 1 form-field matrix.

### Homepage Quick Enquiry

- Storage: enquiries
- Source value: homepage-quick-enquiry (D)
- Admin destination: /admin/enquiries
- Acknowledgement email: yes
- Internal notification: yes
- Appointment record: not created automatically

### Detailed Counselling Request

- Storage: enquiries
- Source value: book-counselling (D)
- Admin destination: /admin/enquiries
- Acknowledgement email: yes
- Internal notification: yes
- Appointment record: created only after staff review or confirmation
- Preferred date and time remain request data

### General Contact

- Storage: enquiries using a general-contact source and category (D)
- Source value: general-contact (D)
- Admin destination: /admin/enquiries
- Acknowledgement email: yes
- Internal notification: yes

### Partnership Enquiry

- Storage: partnership_enquiries
- Source value: university-partnership-enquiry (D)
- Admin destination: /admin/partnership-enquiries
- Acknowledgement email: yes
- Internal notification: yes

### Event Registration

- Storage: event_registrations
- Public form: /resources/events/[event-slug] (D)
- Admin destination: /admin/events/[event-id]/registrations (D)
- Acknowledgement email: yes
- Internal notification: configurable and proposed (D)

### Newsletter

- Inactive
- No route
- No table
- No provider integration
- No marketing workflow until owner approval (D)

Database nullability, validation schemas, email templates, and admin views must follow this mapping.

### Consent Record Requirements

Version 1 planning stores consent metadata directly on the relevant submission record. A separate consent_records table may be evaluated later only if multiple consent changes, withdrawals, or version history require it. (D)

Every active-form submission table—enquiries, partnership_enquiries, and event_registrations—must record directly:

- Consent type
- Consent timestamp
- Consent-text version
- Submission source
- Privacy-policy version where practical (D)

Appointment records do not independently create public consent.

### Appointment Creation Rule

An enquiry containing preferred date or time must not automatically become a confirmed appointment.

An appointment record may be created only after authorised staff review.

### Operational Responsibility Matrix

Use role titles only, not real people.

#### Business Owner

- Approve public business information
- Approve legally significant settings
- Approve service availability
- Approve partnerships, testimonials, and leadership profiles
- Approve launch

#### Form and Enquiry Owner (D)

- Review form submissions
- Assign enquiries
- Manage follow-ups
- Review duplicate and spam flags
- Confirm appointments

#### Content Verification Owner (D)

- Verify visa information
- Verify scholarship information
- Verify tuition and living-cost information
- Verify deadlines
- Record official sources and verification dates

#### Privacy Request Owner (D)

- Receive access, correction, withdrawal, and deletion requests
- Coordinate identity verification
- Record completion
- Escalate questions requiring professional review

#### Security Incident Owner (D)

- Receive security alerts
- Coordinate containment
- Revoke access where necessary
- Preserve logs
- Record incident actions
- Escalate to the business owner

#### Backup and Recovery Owner (D)

- Verify backup availability
- Schedule restore tests
- Document recovery results
- Report failures

#### Dummy Content Review Owner (D)

- Search for “(D)”
- Maintain the pre-launch dummy-content checklist
- Verify replacement or removal
- Record final sign-off

One person may hold more than one role during the early stage, but each responsibility must be explicitly assigned before the relevant system becomes active.

---

## 28. Form Validation Plan

Validation should include:

### Name

- Required
- Reasonable minimum and maximum length
- Reject obvious control characters
- Support legitimate international names

### Phone

- Required
- Normalise spacing and country code
- Validate reasonable length
- Do not assume all users have Indian numbers

### Email

- Required
- Normalised
- Valid format
- Maximum length

### Message

- Maximum length
- Remove unsafe markup
- Reject obvious spam patterns

### Dates

- Valid date
- Not unintentionally in the past
- Within supported appointment range

### Consent

- Must be explicitly checked
- Must record timestamp and consent text version

---

## 29. Duplicate Enquiry Handling

Possible duplicate signals:

- Same email within a defined period
- Same phone within a defined period
- Same form and similar message
- Rapid repeated submission

The system should not automatically discard a legitimate enquiry.

Suggested behaviour:

- Flag possible duplicates
- Link related enquiries
- Notify staff
- Provide a friendly visitor message

---

## 30. Spam Protection Plan

Use several protections:

- Honeypot field
- Server-side rate limiting
- Submission timing analysis
- Input-length limits
- Duplicate detection
- IP or anonymous request throttling
- CAPTCHA only when necessary (D)
- Administrative spam status

Spam protection should not create unnecessary difficulty for genuine users.

---

## 31. Appointment-Request Plan

Version 1 should initially use appointment requests rather than instant guaranteed booking.

### Visitor Selects

- Preferred date
- Preferred time
- Counselling mode
- Preferred country
- Study level

### Staff Confirms

- Actual date
- Actual time
- Assigned counsellor
- Meeting method
- Meeting link or office location

This avoids double booking while staffing is still being finalised.

Direct real-time calendar booking may be added later. (D)

---

## 32. Email Workflow

### Visitor Acknowledgement

Send after successful enquiry submission.

Include:

- Name
- Enquiry reference
- Preferred destination
- Expected response period
- Phone number
- Privacy information
- No-guarantee disclaimer where appropriate

### Staff Notification

Send to an authorised GEC address.

Include:

- Enquiry summary
- Submission time
- Link to secure admin record
- No sensitive information beyond what staff require

### Appointment Confirmation

Send only after staff confirmation.

### Failure Handling

- Record provider response
- Retry temporary failures carefully
- Avoid duplicate acknowledgement emails
- Allow staff to see failed email status

---

## 33. Email Address Plan

Current confirmed public email:

professorabbasali854@gmail.com

Suggested future addresses:

info@gecglobal.in (D)
admissions@gecglobal.in (D)
counselling@gecglobal.in (D)
partnerships@gecglobal.in (D)
notifications@gecglobal.in (D)

Professional domain email should be configured after a domain is purchased.

---

## 34. WhatsApp Plan

Version 1 may use a click-to-WhatsApp link. (D)

Suggested pre-filled message:

Hello GEC, I would like to discuss overseas education and book a counselling session. (D)

The WhatsApp button should:

- Use the confirmed number only after approval
- Include an accessible label
- Open a pre-filled message
- Avoid exposing private enquiry data
- Not automatically send messages
- Not cover important mobile controls

Official WhatsApp Business API automation should be considered later. (D)

---

## 35. Content Management Plan

### Version 1 Content Types

- Destinations
- Services
- Programs
- Articles
- Scholarships
- Events
- FAQs
- Leadership profiles
- Testimonials
- Partnership information

Administrative routes follow SITEMAP.md. The database models in this document are planning models only, and no implementation currently exists.

### Newsletter Status

Newsletter subscription remains proposed and is not active in Version 1 until owner approval is recorded. (D)

No newsletter table, route, provider integration, or marketing email workflow should be implemented before approval of:

- Purpose
- Consent wording
- Unsubscribe process
- Retention period
- Provider
- Administrator responsibility

### Version 1 Admin Settings Scope

The Version 1 admin settings area may manage only approved non-secret public business and presentation settings. (D)

Deployment variables, secrets, authentication configuration, database credentials, provider credentials, DNS settings, and security policies must remain outside the public administrative settings interface.

### Editorial States

Draft
In Review
Approved
Published
Archived

### Publishing Rules

- Only approved staff may publish
- Time-sensitive content requires a verification date
- Dummy content must not be published
- University logos require permission
- Testimonials require consent
- Visa and scholarship content requires official sources

---

## 36. Dummy-Content Development Plan

Every dummy item must contain:

(D)

During development:

- Dummy content may appear in local and preview environments.
- Dummy content should have an internal visual warning where practical.
- A production build check should search for “(D)”.
- Production deployment should fail or warn when public content contains “(D)”. (D)

Before launch:

- Replace verified items.
- Remove unnecessary items.
- Keep internal-only examples out of public pages.

---

## 37. Search Function Plan

Initial search should cover:

- Destinations
- Services
- Programs
- Articles
- Scholarships
- Events
- FAQs

### Version 1 Approach

Use a simple database or content-index search. (D)

### Future Improvements

- Typo tolerance (D)
- Search suggestions (D)
- Highlighted matches (D)
- Search analytics (D)
- Dedicated search provider (D)

Search results must not expose administrative or personal information.

---

## 38. SEO Development Plan

Implement:

- Unique page titles
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- Social images
- Structured data where appropriate
- XML sitemap
- Robots rules
- Breadcrumb structured data
- Article structured data
- Event structured data
- Organisation structured data
- Internal linking
- Descriptive URLs
- Last updated dates
- Image alternative text

No page should be generated only for keyword volume without useful content.

---

## 39. Indexing Rules

Public approved pages may be indexed.

Do not index:

/admin/*
/thank-you
/form-error
/error
/draft/*
/preview/*

Do not index:

- Dummy pages
- Incomplete pages
- Private records
- Search results containing personal information
- Administrative pages

---

## 40. Accessibility Development Plan

Target WCAG 2.2 AA where practical. (D)

Implement:

- Semantic HTML
- Skip-to-content link
- Keyboard navigation
- Visible focus
- Accessible dropdowns
- Accessible mobile menu
- Accessible accordions
- Form labels
- Error associations
- Status announcements
- Colour contrast
- Reduced motion
- Alternative text
- Logical heading structure
- Sufficient tap targets
- Screen-reader testing

Accessibility must be tested throughout development rather than only before launch.

---

## 41. Responsive Development Plan

Test the website at multiple widths.

Suggested development targets:

- 360-pixel mobile (D)
- 390-pixel mobile (D)
- 768-pixel tablet (D)
- 1024-pixel laptop (D)
- 1280-pixel desktop (D)
- 1440-pixel large desktop (D)

Required behaviours:

- No horizontal page scrolling
- Forms fit mobile screens
- Menus remain usable
- Tables have responsive handling
- Images scale correctly
- Buttons remain tappable
- Text remains readable
- Admin pages remain functional

---

## 42. Image Development Plan

Use:

- Optimised formats
- Responsive image sizing
- Lazy loading below the fold
- Explicit dimensions
- Alternative text
- Approved licences
- Consistent aspect ratios

Do not use:

- Competitor images
- Unauthorised university logos
- Fake testimonial photographs
- Oversized background videos
- Low-resolution images
- Images containing false claims

---

## 43. Performance Plan

Performance targets should be evaluated using current tools during implementation.

Development practices should include:

- Server rendering where appropriate
- Minimal client-side JavaScript
- Optimised images
- Limited font weights
- Code splitting
- Lazy loading
- Caching
- Database indexes
- Efficient queries
- Limited third-party scripts
- Avoidance of large animation libraries
- Avoidance of unnecessary tracking tools

---

## 44. Environment Plan

Use separate environments:

### Local

Developer’s computer.

### Preview

Temporary deployment for each reviewed change.

### Production

Public approved website.

Each environment should use separate configuration.

Where practical, preview and production should not share sensitive database data.

---

## 45. Environment Variables

Future environment variables may include:

NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
EMAIL_PROVIDER_API_KEY
EMAIL_FROM_ADDRESS
ADMIN_NOTIFICATION_EMAIL
SPAM_PROTECTION_SECRET
ANALYTICS_ID
ERROR_MONITORING_DSN

These names are proposed examples. (D)

Rules:

- Do not commit secrets.
- Do not expose server-only secrets to the browser.
- Keep `.env.example` free of real values.
- Use separate values for preview and production.
- Rotate leaked secrets immediately.

---

## 46. Deployment Workflow

Suggested deployment workflow:

Local Development
        │
        ▼
Feature Branch
        │
        ▼
GitHub Pull Request
        │
        ▼
Vercel Preview Deployment
        │
        ▼
Review and Testing
        │
        ▼
Merge to Main
        │
        ▼
Production Deployment

No production deployment should occur directly from unreviewed local files.

---

## 47. Domain Plan

Suggested domains:

gecglobal.in (D)
geceducation.in (D)
globaleducationcareers.in (D)
studywithgec.com (D)
gecabroad.com (D)

Before purchase:

- Check availability
- Check trademark risk
- Check spelling
- Check pronunciation
- Check social-media availability
- Confirm ownership details

The domain should be purchased through an account owned by GEC or Dr. Abbas Ali.

---

## 48. Deployment Checklist

Before first deployment:

- Repository is backed up
- Build succeeds
- Tests pass
- Environment variables are configured
- Preview database is configured
- Dummy content is identified
- Admin routes are protected
- Forms are rate limited
- Emails are tested
- Legal pages exist
- Privacy consent is visible
- Sitemap is generated
- Robots rules are correct
- Error pages exist
- Mobile navigation works
- Accessibility checks pass
- No secrets are committed

---

## 49. Production Launch Checklist

Before public launch:

- GEC business information is approved
- Office address is verified
- Owner profile is approved
- Contact information is verified
- Domain is connected
- Professional email is configured
- HTTPS works
- Production database is configured
- Database backup is configured
- Staff accounts are created
- Staff roles are tested
- Forms are tested
- Emails are delivered
- WhatsApp link is confirmed
- Analytics consent is configured
- Privacy policy is reviewed
- Terms are reviewed
- Disclaimer is reviewed
- Refund policy is reviewed where relevant
- University information is verified
- Visa information is current
- Scholarships include official sources
- Testimonials are genuine
- University logos are authorised
- All public “(D)” markers are removed
- Search-engine metadata is complete
- Sitemap is submitted
- Final backup exists
- Rollback plan exists

---

## 50. Testing Strategy

Testing must occur throughout development.

### 50.1 Unit Testing

Test:

- Validation functions
- Formatting functions
- Status transitions
- Permission functions
- Duplicate-detection logic
- Content utilities

### 50.2 Component Testing

Test:

- Forms
- Navigation
- Dropdowns
- Accordions
- Buttons
- Error states
- Success states
- Admin filters

### 50.3 Integration Testing

Test:

- Form to database
- Form to email
- Authentication to protected routes
- Content publishing
- Enquiry status changes
- Appointment updates
- CSV export

### 50.4 End-to-End Testing

Test complete user journeys:

- Submit counselling enquiry
- Submit partnership enquiry
- Register for event
- Staff login
- View enquiry
- Assign counsellor
- Add note
- Update status
- Publish article

### 50.5 Manual Testing

Test:

- Desktop
- Mobile
- Tablet
- Keyboard-only navigation
- Screen-reader basics
- Slow internet
- Invalid inputs
- Expired sessions
- Email failures
- Empty database states

---

## 51. Browser Testing

Test current supported versions of:

- Chrome
- Microsoft Edge
- Firefox
- Safari
- Mobile Chrome
- Mobile Safari

Exact browser-support policy should be confirmed before launch. (D)

---

## 52. Security Testing

Test:

- Unauthorised admin access
- Role restrictions
- Direct database access
- Form injection
- Cross-site scripting attempts
- Cross-site request forgery protections where relevant
- Rate limiting
- Duplicate spam
- Session expiration
- Password recovery
- Data export permissions
- Sensitive error messages
- Environment-variable exposure
- Dependency vulnerabilities
- Row-level security

Detailed security requirements belong in SECURITY_CHECKLIST.md.

---

## 53. Content Testing

Verify:

- No copied competitor content
- No unsupported claims
- No fake partnerships
- No unapproved logos
- No fake testimonials
- No incorrect phone numbers
- No broken email addresses
- No public “(D)” markers
- All links work
- Last updated dates exist
- Sources are recorded
- Disclaimers appear where needed
- Heading levels are correct
- Images have alternative text

---

## 54. Performance Testing

Test:

- Homepage loading
- Country pages
- Image-heavy pages
- Form submission
- Admin data tables
- Search
- Mobile performance
- Slow-network behaviour
- Database-query performance

Avoid optimising only for desktop broadband.

---

## 55. Accessibility Testing

Test:

- Keyboard navigation
- Focus order
- Focus visibility
- Menu operation
- Form labels
- Form errors
- Accordions
- Dialogs
- Colour contrast
- Alternative text
- Reduced motion
- Zoom at 200 percent
- Mobile screen readers where possible

---

## 56. Data Backup Plan

The production plan should include:

- Database backup
- Source-code backup
- Media backup
- Environment-variable recovery procedure
- Domain-account recovery
- Email-account recovery
- Staff-access recovery
- Restore testing

Backup availability should not be assumed without verification.

---

## 57. Logging Plan

Log only what is operationally necessary.

Suggested logs:

- Form submission success or failure
- Email delivery result
- Staff login
- Status changes
- Data exports
- Content publication
- Permission changes
- Deletion actions
- System errors

Do not log:

- Passwords
- Secret keys
- Full sensitive documents
- Unnecessary personal data
- Complete authentication tokens

---

## 58. Audit Plan

Important admin actions should record:

- Staff user
- Action
- Entity
- Entity identifier
- Timestamp
- Relevant non-sensitive metadata

Audit records should be protected from ordinary editing.

---

## 59. CSV Export Plan

CSV export should:

- Require appropriate permission
- Include only needed columns
- Record the export action
- Avoid highly sensitive fields
- Use safe file names
- Prevent spreadsheet-formula injection
- Respect filters
- Provide a clear date range

Export access should be limited.

---

## 60. Maintenance Plan

After launch, maintenance should include:

### Weekly

- Review failed forms
- Review failed emails
- Review errors
- Review spam
- Check urgent content updates

### Monthly

- Update dependencies carefully
- Review analytics
- Review broken links
- Review staff access
- Review content accuracy
- Check database storage
- Test backups

### Quarterly

- Security review
- Accessibility review
- Performance review
- Legal-content review
- Destination-information review
- User-feedback review
- Staff-permission review

### Annually

- Domain renewal
- Hosting review
- Privacy-policy review
- Business-information review
- Disaster-recovery test
- Full content audit

---

## 61. Content Freshness Plan

Time-sensitive content should include:

- Last updated date
- Official source
- Last verified date
- Responsible editor

Suggested review frequencies:

- Visa and immigration: monthly or when official changes occur (D)
- Scholarships: before publication and before deadline (D)
- Application deadlines: each intake (D)
- Tuition and costs: at least annually (D)
- General service pages: every six months (D)
- Founder and contact information: whenever changed

---

## 62. Codex Working Rules

Codex should:

1. Read relevant planning files before every major task.
2. Explain its plan before broad changes.
3. Make small, focused changes.
4. List changed files.
5. Run relevant checks.
6. Report failures honestly.
7. Avoid changing unrelated files.
8. Preserve confirmed information.
9. Preserve dummy markers during development.
10. Avoid inventing external facts.
11. Avoid introducing dependencies unnecessarily.
12. Avoid destructive commands.
13. Avoid exposing secrets.
14. Avoid publishing automatically.
15. Create checkpoints through Git after approval.
16. Ask for approval before architectural changes.
17. Maintain documentation.
18. Follow accessibility and security requirements.

---

## 63. Commands Requiring Extra Caution

The beginner project owner should review commands containing:

rm
rmdir
del
remove
clean
reset
force
drop
truncate
format
migrate reset
database reset
destroy
delete

Do not approve destructive commands without understanding:

- What will be removed
- Whether a backup exists
- Whether the action can be reversed
- Whether it affects local, preview, or production data

---

## 64. Codex Task Template

Future Codex tasks should follow this structure:

Task title:

Files allowed to change:

Files not allowed to change:

Required reading:

Functional requirements:

Design requirements:

Accessibility requirements:

Security requirements:

Dummy-content rules:

Testing requirements:

Commands allowed:

Commands prohibited:

Expected completion report:

This keeps development controlled and reviewable.

---

## 65. Development Milestones

### Milestone 0: Planning

- Requirements
- Sitemap
- Content requirements
- Design direction
- Development plan
- Security checklist
- Decisions log
- README

### Milestone 1: Local Project Setup

- Node.js
- Git
- GitHub
- Next.js
- TypeScript
- Tailwind CSS
- Local development server
- Initial commit

### Milestone 2: Design System

- Colours
- Typography
- Spacing
- Buttons
- Forms
- Cards
- Layout
- Responsive utilities

### Milestone 3: Website Shell

- Header
- Navigation
- Mobile menu
- Footer
- Page layout
- Error pages

### Milestone 4: Homepage

- Hero
- Form prototype
- Destinations
- Services
- Journey
- Founder
- Partnerships
- FAQs
- CTA

### Milestone 5: Public Page Templates

- Country
- Service
- Program
- Resource
- Article
- Event
- Scholarship
- Legal

### Milestone 6: Public Content

- Priority destinations
- Priority services
- About pages
- Founder
- Contact
- Counselling

### Milestone 7: Database

- Supabase project
- Tables
- Migrations
- Row-level security
- Seed data
- Database types

### Milestone 8: Forms and Email

- Counselling form
- Contact form
- Partnership form
- Validation
- Spam protection
- Emails
- Success pages

### Milestone 9: Authentication and Admin

- Staff login
- Roles
- Dashboard
- Enquiries
- Notes
- Appointments
- Content management
- Audit log

### Milestone 10: Testing

- Functional
- Responsive
- Browser
- Accessibility
- Performance
- Security
- Content

### Milestone 11: Preview Review

- Vercel preview
- Owner review
- Staff review
- Corrections
- Final content replacement

### Milestone 12: Production Launch

- Domain
- HTTPS
- Production database
- Professional email
- Analytics
- Search-engine submission
- Backup
- Staff training

---

## 66. Proposed Development Timeline

The following timeline is a planning example only.

### Week 1

Planning review and technical setup. (D)

### Week 2

Design system and website shell. (D)

### Week 3

Homepage and public templates. (D)

### Week 4

Priority country and service pages. (D)

### Week 5

Database, forms, and email. (D)

### Week 6

Authentication and admin dashboard. (D)

### Week 7

Testing, content verification, and corrections. (D)

### Week 8

Deployment, training, and launch preparation. (D)

The actual schedule depends on approvals, content availability, technical issues, and business readiness.

---

## 67. Approval Checkpoints

Owner approval should be obtained after:

1. Planning documents
2. Homepage wireframe
3. Visual design
4. Website shell
5. Homepage
6. Public-page templates
7. Form behaviour
8. Database schema
9. Admin dashboard
10. Preview deployment
11. Final content
12. Production launch

Do not wait until the end to request all feedback.

---

## 68. Rollback Plan

Every production release should support rollback.

Recommended safeguards:

- Git commit before release
- Tagged stable release (D)
- Database migration backup
- Preview testing
- Previous deployment availability
- Documented environment variables
- Restore instructions
- Production incident contact

---

## 69. Incident Plan

If a serious issue occurs:

1. Restrict affected functionality.
2. Preserve evidence and logs.
3. Determine affected data.
4. Rotate exposed credentials.
5. Restore a safe deployment.
6. Inform responsible GEC personnel.
7. Notify affected users where legally required.
8. Record the incident.
9. Correct the root cause.
10. Review prevention measures.

---

## 70. Staff Training Plan

Before launch, staff should be trained to:

- Sign in securely
- View enquiries
- Search and filter
- Assign counsellors
- Add notes
- Update statuses
- Schedule follow-ups
- Manage appointments
- Publish content
- Verify time-sensitive information
- Export data safely
- Handle deletion requests
- Identify suspicious submissions
- Report technical problems

---

## 71. Launch Acceptance Criteria

The website may be considered ready for launch when:

- Priority pages are complete
- Content is approved
- Dummy markers are removed from public content
- Contact details are verified
- Forms work
- Emails work
- Admin authentication works
- Roles are tested
- Mobile design works
- Accessibility checks pass
- Performance is acceptable
- Security checks pass
- Legal pages are reviewed
- Backups exist
- Staff are trained
- Rollback is possible
- Owner approval is recorded

---

## 72. Future Version Plan

### Version 1.1

- Improved reporting
- Follow-up reminders
- Newsletter management
- More destinations
- Improved event registration
- Advanced content workflow

### Version 2

- Student accounts
- Application tracking
- Secure document storage
- Task checklists
- Counsellor communication
- Document reminders

### Version 3

- AI-assisted university discovery (D)
- AI-assisted course discovery (D)
- AI-supported FAQ assistant (D)
- Lead prioritisation (D)
- Personalised student dashboard (D)

Future AI features must be reviewed for accuracy, privacy, transparency, and human oversight.

---

## 73. Current Implementation Status

The planning package currently contains:

- START_HERE.md
- PROJECT_REQUIREMENTS.md
- SITEMAP.md
- CONTENT_REQUIREMENTS.md
- DESIGN_DIRECTION.md
- DEVELOPMENT_PLAN.md
- SECURITY_CHECKLIST.md
- DECISIONS_LOG.md
- README.md

The initial planning-document drafting stage is complete.

The project remains in planning review and correction.

Website coding has not yet begun.

No framework has been installed.

No Git repository has been initialised.

No GitHub repository has been created.

No database has been created.

No authentication system has been created.

No external production service has been connected.

No deployment has occurred.

---

## 74. Dummy Development Decision Rule

All unconfirmed technical, commercial, operational, scheduling, provider, account, domain, and deployment decisions must end with:

(D)

Before implementation or launch, search the project for:

(D)

Every occurrence must be:

1. Approved;
2. Replaced;
3. Removed; or
4. Kept only in unpublished internal documentation.

No public production page should display “(D)”.

---

## 75. Development Approval Requirement

This development plan must be reviewed before:

- Installing development software
- Initialising Git
- Creating a GitHub repository
- Creating the Next.js application
- Installing packages
- Creating the Supabase project
- Creating the database
- Connecting email services
- Developing the administrative dashboard
- Deploying to Vercel
- Purchasing a domain
- Launching the website

Any major technical change made later should be recorded in DECISIONS_LOG.md.
