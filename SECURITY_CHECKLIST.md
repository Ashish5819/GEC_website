# Global Education & Careers Website Security Checklist

**Document Status:** Initial Draft  
**Project:** Global Education & Careers Website  
**Organisation:** Global Education & Careers  
**Abbreviation:** GEC  
**Version:** 1.0  
**Last Updated:** 30 July 2026  

---

## 1. Purpose of This Document

This document defines the security, privacy, access-control, data-protection, operational, and incident-response requirements for the Global Education & Careers website.

It should guide:

- Website architecture
- Public forms
- Administrative access
- Database security
- Authentication
- Staff permissions
- Personal-data handling
- Email notifications
- WhatsApp links
- File storage
- Environment variables
- API keys
- Logging
- Backups
- Data exports
- Dependency management
- Deployment
- Monitoring
- Incident response
- Privacy requests
- Launch review
- Ongoing maintenance

This document is a planning checklist only.

No security tool, database, authentication account, external service, or production environment should be created while preparing this file.

---

## 2. Security Objective

The security objective is to protect:

- Website visitors
- Students
- Parents
- Working professionals
- University representatives
- Staff members
- Enquiry information
- Appointment information
- Internal notes
- Published content
- Staff accounts
- Administrative functions
- GEC business information
- Technical infrastructure
- Service credentials
- Backups
- Audit records

The website should collect only the information required for legitimate GEC operations.

---

## 3. Security Principles

The project should follow these principles:

### Privacy by Design

Privacy requirements should be considered before features are built.

### Data Minimisation

Collect only information that is genuinely necessary.

### Least Privilege

Each staff member and system component should receive only the access required for its role.

### Secure by Default

New accounts, records, routes, and content should begin with restricted access unless public access is intentionally approved.

### Defence in Depth

Security should not depend on one control.

### Separation of Duties

Content editing, student-data access, staff management, and security administration should be separated where practical.

### Fail Securely

When a security check fails, access should be denied safely.

### Transparent Consent

Visitors should understand why their information is collected and how they may be contacted.

### Verifiable Changes

Important administrative actions should be recorded.

---

## 4. Version 1 Data-Scope Restriction

Version 1 may collect only ordinary enquiry and counselling-planning information.

Allowed examples:

- Name
- Phone number
- Email address
- City
- Current qualification
- Current institution
- Graduation year
- Preferred country
- Preferred course
- Intended study level
- Intended intake
- Approximate budget range
- Scholarship interest
- Education-loan interest
- English-test status
- Work experience
- Preferred counselling mode
- Preferred appointment date
- Preferred appointment time
- General message
- Consent record

Version 1 must not collect:

- Passport copies
- Aadhaar copies
- PAN-card copies
- Bank statements
- Bank-account numbers
- Credit-card details
- Debit-card details
- Medical records
- Health information
- Biometric information
- Government-login credentials
- University portal passwords
- Email passwords
- Visa portal passwords
- Financial documents
- Tax documents
- Full academic-document uploads
- Recommendation-letter uploads
- Sensitive family information
- Unnecessary identity documents

Any later document-upload feature must undergo a separate security and privacy review.

---

## 5. Public-Form Security Checklist

Every public form should:

- Use HTTPS in production
- Use server-side validation
- Use client-side validation only as a usability aid
- Apply input-length limits
- Normalise input where appropriate
- Reject unsafe or malformed data
- Use explicit consent
- Record consent time
- Record the version of consent text
- Apply spam protection
- Apply rate limiting
- Detect repeated submissions
- Avoid revealing internal errors
- Avoid returning database details
- Avoid exposing staff email addresses unnecessarily
- Avoid storing information before consent
- Preserve user data safely after recoverable validation errors
- Avoid duplicate database records
- Log only necessary submission events
- Provide a clear privacy-policy link

Consent evidence must remain linked to the original submission record. Staff must not overwrite the original consent timestamp or consent-text version when updating operational fields.

If consent is withdrawn, the withdrawal action and date must be recorded without rewriting the original consent evidence. The exact withdrawal-storage approach remains proposed. (D)

## 5.1 Canonical Public-Form Security Mapping

PROJECT_REQUIREMENTS.md is the authoritative source for Version 1 public-form fields and required/optional status.

### Homepage Quick Enquiry

- Collect only minimum contact and study-interest information
- Do not request financial documents
- Do not create an appointment automatically
- Protect against duplicate callback requests

### Detailed Counselling Request

- Allow broader planning information
- Keep budget, loan, scholarship, and work-experience fields optional
- Prohibit sensitive-document uploads
- Treat preferred date and time as requests only

### General Contact

- Do not treat general contact consent as marketing consent
- Prevent message content from being rendered as unsafe HTML
- Categorise safely in the admin interface

### Partnership Enquiry

- Administrative route: /admin/partnership-enquiries
- Do not treat submission as an approved partnership
- Restrict records to authorised staff
- Verify institutional identity before formal business action
- Avoid publishing submitted institution details automatically

### Event Registration

- Restrict registrant access
- Separate event consent from marketing consent
- Do not accept registrations for dummy events
- Apply export controls

### Newsletter

- Remain inactive until approved (D)
- No storage or marketing messages before separate consent and unsubscribe controls exist

---

## 6. Form Field Restrictions

### Name

- Required where necessary
- Support legitimate international names
- Permit spaces, hyphens, and apostrophes
- Apply reasonable length limits
- Reject control characters
- Do not require titles such as Mr., Ms., or Dr.

### Phone Number

- Normalise spacing and punctuation
- Support international country codes
- Apply reasonable length limits
- Do not assume all numbers are Indian
- Do not use the number for unrelated marketing without consent

### Email

- Convert to a consistent case where appropriate
- Trim unnecessary spaces
- Validate format
- Apply maximum length
- Do not reveal whether an email belongs to an existing staff account

### Message

- Apply a maximum length
- Store as plain text unless rich text is specifically required
- Escape output before displaying
- Reject scripts and unsafe markup
- Avoid accepting file attachments in Version 1

### Dates and Times

- Validate on the server
- Prevent impossible dates
- Prevent unintended past dates
- Apply the correct time zone
- Do not guarantee booking until staff confirmation

---

## 7. Consent Checklist

Consent must:

- Use a separate checkbox
- Not be pre-selected
- Be written in clear language
- State the expected contact channels
- Link to the privacy policy
- Be recorded with timestamp
- Be recorded with consent-text version
- Be withdrawable through a reasonable process
- Not be bundled unnecessarily with unrelated marketing

Suggested consent text:

I agree that Global Education & Careers may contact me by phone, email, or WhatsApp regarding my enquiry and related counselling services. (D)

Newsletter consent should be separate from counselling-contact consent.

---

## 8. Spam and Abuse Protection

Use multiple protections rather than relying on one CAPTCHA.

Recommended protections:

- Hidden honeypot field
- Server-side rate limiting
- Per-IP throttling where lawful and practical
- Per-session throttling
- Duplicate-submission detection
- Minimum form-completion timing
- Input-length restrictions
- Suspicious-pattern detection
- Administrative spam status
- Optional CAPTCHA after suspicious behaviour (D)

Spam protection must not prevent genuine users with disabilities or slow internet connections from submitting enquiries.

---

## 9. Rate-Limiting Requirements

Rate limits should apply to:

- Public enquiry forms
- Counselling requests
- Partnership forms
- Event registration
- Newsletter registration
- Admin login
- Password recovery
- Email-verification requests
- Search requests where abuse is possible
- Data-export actions
- Administrative mutation actions

Suggested public-form limit:

Five submissions per hour per network identifier, with additional duplicate checks. (D)

Suggested admin-login limit:

Five failed attempts within fifteen minutes before temporary restriction. (D)

Final values must be tested and approved before launch.

---

## 10. Duplicate-Submission Protection

Possible duplicate indicators:

- Same phone number
- Same email address
- Same message
- Same source page
- Same intended destination
- Repeated submission within a short period

The system should:

- Flag possible duplicates
- Avoid automatically deleting legitimate requests
- Link related records where appropriate
- Display a friendly message
- Notify authorised staff
- Avoid sending repeated acknowledgement emails

---

## 11. Input Validation and Output Encoding

All user-controlled input must be considered untrusted.

Required practices:

- Validate data type
- Validate length
- Validate format
- Validate allowed values
- Reject unexpected fields
- Encode output
- Escape content before HTML display
- Use parameterised database operations
- Avoid dynamically constructing database queries from raw input
- Avoid rendering unsanitised HTML
- Avoid using dangerous HTML-rendering features unless strictly controlled
- Avoid trusting hidden form fields

Client-side validation must never be the only validation layer.

---

## 12. Cross-Site Scripting Protection

To reduce cross-site scripting risk:

- Render user content as text by default
- Escape enquiry notes when displayed
- Sanitize any approved rich-text content
- Restrict administrative rich-text features
- Use a trusted sanitisation process if HTML is allowed
- Avoid inline scripts where practical
- Use a restrictive Content Security Policy after testing
- Avoid unsafe script-evaluation functions
- Avoid inserting raw user input into page metadata
- Avoid placing secrets in browser JavaScript

---

## 13. SQL and Database-Injection Protection

Database operations should:

- Use supported Supabase or PostgreSQL query methods
- Use parameterised queries
- Avoid raw SQL built from user input
- Validate identifiers
- Restrict stored procedures
- Avoid exposing unrestricted database functions
- Review database functions with elevated privileges
- Apply row-level security
- Use database roles with limited permissions
- Log suspicious failures without exposing database structure

---

## 14. Cross-Site Request Forgery Protection

Administrative state-changing actions should:

- Require an authenticated session
- Verify request origin where appropriate
- Use secure framework protections
- Avoid state changes through simple public GET requests
- Use same-site cookie protections
- Confirm destructive actions
- Re-authenticate for highly sensitive changes where appropriate (D)

---

## 15. Security Headers Checklist

Production responses should be reviewed for appropriate headers.

Potential headers include:

- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- Cross-Origin-Opener-Policy where compatible
- Cross-Origin-Resource-Policy where compatible
- Frame-protection controls

Header values must be tested to avoid breaking required features.

Do not copy a security-header configuration without understanding its effect.

---

## 16. HTTPS Requirements

Production must:

- Use HTTPS
- Redirect HTTP to HTTPS
- Use valid certificates
- Avoid mixed content
- Use secure cookies
- Avoid loading scripts over insecure connections
- Avoid sending form data over HTTP
- Use HTTPS for external service callbacks
- Verify that all public domains and subdomains are protected

HTTPS alone does not make the application secure.

---

## 17. Cookie Security

Authentication cookies should:

- Use the Secure attribute
- Use the HttpOnly attribute where appropriate
- Use an appropriate SameSite setting
- Use limited lifetime
- Be invalidated on logout
- Be invalidated after password changes where supported
- Not contain sensitive plaintext data
- Not expose service-role credentials
- Not be accessible to unnecessary scripts

Non-essential analytics or advertising cookies should not be set before required consent.

---

## 18. Staff Authentication Checklist

Staff authentication must:

- Use individual staff accounts
- Prohibit shared accounts
- Require verified email addresses
- Use strong authentication methods
- Apply login rate limiting
- Use secure recovery
- Record important login events
- Support account deactivation
- Expire sessions appropriately
- Protect administrator accounts more strongly
- Avoid exposing whether a staff email exists
- Restrict access after repeated failed attempts
- Notify administrators of suspicious sign-in activity where supported (D)

---

## 19. Password Requirements

When passwords are used:

- Require sufficient length
- Allow password managers
- Permit long passphrases
- Do not require frequent arbitrary changes
- Do not store passwords directly
- Use the authentication provider’s secure password hashing
- Block known compromised passwords where supported (D)
- Prevent password reuse where supported (D)
- Do not send passwords by email
- Do not ask staff to share passwords
- Do not record passwords in documents or spreadsheets

Suggested minimum length:

Twelve characters for staff accounts. (D)

Final authentication requirements should follow the selected provider’s current secure practices.

---

## 20. Multi-Factor Authentication

Multi-factor authentication should be required for:

- Administrators
- Account owners
- Domain registrar
- GitHub
- Supabase
- Vercel
- Transactional email provider
- Analytics provider
- Error-monitoring provider
- Business email accounts

Suggested methods:

- Authenticator application (D)
- Hardware security key for high-privilege accounts (D)

SMS should not be the only recovery method where stronger options are available.

Recovery codes must be stored securely and not inside the source repository.

---

## 21. Session Security

Administrative sessions should:

- Expire after inactivity
- Expire after a maximum lifetime
- Be revoked after account deactivation
- Be revoked after critical credential changes
- Use secure cookies
- Avoid exposing tokens in URLs
- Avoid storing long-lived tokens in insecure browser storage
- Support explicit logout
- Protect against session fixation
- Require re-authentication for sensitive actions where appropriate

Suggested inactivity timeout:

Thirty minutes for administrative sessions. (D)

Suggested maximum session duration:

Eight hours. (D)

Final values must balance security and staff usability.

---

## 22. Account-Recovery Security

Password or account recovery should:

- Use time-limited links
- Use one-time tokens
- Avoid revealing whether an account exists
- Notify the account owner
- Invalidate used recovery links
- Avoid asking security questions based on public information
- Log recovery activity
- Allow administrators to disable compromised accounts
- Require identity verification for high-privilege recovery

Recovery emails must be protected with multi-factor authentication.

---

## 23. Staff-Offboarding Checklist

When a staff member leaves or changes role:

- Disable the account promptly
- Revoke active sessions
- Remove unnecessary permissions
- Rotate shared secrets if any were exposed
- Remove access to GitHub
- Remove access to Vercel
- Remove access to Supabase
- Remove access to email services
- Remove access to analytics
- Remove access to cloud storage
- Transfer content ownership
- Preserve required audit records
- Confirm return or deletion of exported data

---

## 24. Role-Based Access Control

Suggested roles:

- Administrator (D)
- Senior Counsellor (D)
- Counsellor (D)
- Content Editor (D)
- Read-Only Viewer (D)

Access must follow least privilege.

### Administrator

May manage:

- Staff
- Roles
- Settings
- Enquiries
- Content
- Exports
- Audit records

### Counsellor

May access only permitted enquiries and appointments.

### Content Editor

Must not receive access to private student enquiries unless separately authorised.

### Read-Only Viewer

Must not edit, delete, export, or publish unless specifically authorised.

Permissions must be enforced on the server and database, not only hidden in the interface.

---

## 25. Supabase Security Checklist

The future Supabase project should:

- Use a GEC-owned account
- Enable multi-factor authentication for owners
- Use separate local, preview, and production projects where practical
- Enable row-level security on exposed tables
- Test every row-level security policy
- Keep service-role keys server-only
- Never expose service-role keys to the browser
- Restrict public anonymous access
- Use migrations for schema changes
- Review database functions
- Review storage policies
- Monitor authentication activity
- Configure backup and recovery options
- Remove unused API keys
- Rotate exposed keys immediately

---

## 26. Row-Level Security Checklist

Every table must be reviewed individually.

### Private Tables

The following should not be publicly readable:

- enquiries
- appointments
- enquiry_notes
- follow_ups
- staff_profiles
- partnership_enquiries
- event_registrations
- audit_logs
- email_logs
- testimonials before publication and after archival (D)
- leadership_profiles before publication and after archival (D)
- site_settings unless a specific setting is intentionally approved for public exposure (D)

### Public Content Tables

Public access may be allowed only for approved and published records:

- destinations
- services
- programs
- articles
- scholarships
- events
- faqs

Policies should ensure:

- Draft records remain private
- Archived records are handled intentionally
- Private fields are not returned publicly
- Staff see only records permitted by role
- Public users cannot update records directly
- Public form submissions use controlled server operations

Public pages must access only fields and records intentionally approved for publication.

### Testimonial Security and Consent

Testimonials must:

- Have explicit publication consent
- Have an evidence or consent reference
- Avoid sensitive personal information
- Avoid guaranteed-outcome claims
- Allow consent withdrawal
- Be unpublished when consent is withdrawn
- Restrict draft and archived records to authorised staff
- Avoid publishing dummy testimonials
- Record publication approval

### Leadership and Advisor Profile Security

Profiles must:

- Be identity-verified
- Have biography approval
- Have photograph permission
- Have permission for external profile links
- Remain private until approved
- Exclude unnecessary personal information
- Avoid unsupported qualifications or affiliations
- Be unpublished when the person withdraws permission where applicable

### Administrative Settings Security

The Version 1 settings interface must not expose or store:

- Secrets
- Passwords
- API keys
- Access tokens
- Private keys
- Database credentials
- Service-role keys
- Authentication-provider configuration
- DNS credentials
- Deployment secrets
- Recovery codes

Changes to approved public business settings must:

- Require an authorised role
- Record the staff user
- Record the previous value
- Record the new value
- Record the time
- Create an audit-log entry
- Require owner approval for legally or publicly significant information

---

## 27. Service-Role Key Protection

The Supabase service-role key must:

- Remain server-side
- Never use a public environment-variable prefix
- Never be included in browser code
- Never be committed to Git
- Never appear in screenshots
- Never be included in documentation
- Never be included in client logs
- Be restricted to necessary server operations
- Be rotated immediately if exposed

Public clients should use only the intended public key with effective row-level security.

---

## 28. Environment Variable Security

Environment variables should:

- Be separated by environment
- Be configured through approved platform settings
- Never be committed with real values
- Never appear in client-side code unless intentionally public
- Use clear names
- Be documented in `.env.example` without values
- Be rotated after exposure
- Be reviewed before screenshots or support requests
- Be removed when no longer needed
- Be restricted to required deployment environments

Potential future variables may include:

- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- EMAIL_PROVIDER_API_KEY
- EMAIL_FROM_ADDRESS
- ADMIN_NOTIFICATION_EMAIL
- SPAM_PROTECTION_SECRET
- ANALYTICS_ID
- ERROR_MONITORING_DSN

These names are proposed examples. (D)

---

## 29. Secret-Handling Rules

Never place secrets in:

- Source code
- Markdown documents
- Screenshots
- Chat messages
- Git commits
- Pull-request descriptions
- Browser code
- Public logs
- Error messages
- Test fixtures
- Shared spreadsheets
- Public issue trackers

Secrets include:

- Passwords
- API keys
- Service-role keys
- Database passwords
- Access tokens
- Private keys
- Recovery codes
- Session tokens
- Webhook signing secrets

---

## 30. GitHub Security Checklist

The GitHub repository should:

- Be private during development (D)
- Be owned by GEC or Dr. Abbas Ali
- Use multi-factor authentication
- Use protected production branches (D)
- Require pull-request review for important changes (D)
- Prevent direct production-branch changes where practical
- Enable secret scanning where available
- Avoid committing `.env` files
- Avoid committing exported student data
- Avoid committing backups
- Avoid committing database dumps
- Avoid committing private documents
- Review third-party GitHub application permissions
- Remove inactive collaborators
- Use meaningful commit history
- Maintain a secure `.gitignore`

---

## 31. Branch and Pull-Request Security

Pull requests should be reviewed for:

- Secret exposure
- New dependencies
- Authentication changes
- Permission changes
- Database-policy changes
- Form changes
- Logging changes
- Export features
- External scripts
- Analytics additions
- Cookie changes
- Legal and privacy impact
- Dummy-content exposure
- Unexpected generated files

No security-sensitive change should be merged solely because automated checks pass.

---

## 32. Dependency Security

Before adding a dependency:

- Confirm it is necessary
- Review its maintenance status
- Review its official documentation
- Review its licence
- Review known vulnerabilities
- Review package ownership
- Prefer established packages
- Avoid abandoned packages
- Avoid duplicate libraries
- Avoid packages requiring excessive permissions
- Pin or lock dependencies through the package lockfile
- Review transitive dependencies where risk is high

After launch:

- Review dependency alerts
- Apply security updates
- Test before deployment
- Remove unused dependencies

---

## 33. Package-Installation Safety

Before approving an installation command:

- Confirm the package name
- Check for spelling mistakes
- Verify the official package
- Understand installation scripts
- Review the files that will change
- Avoid running as administrator unless necessary
- Avoid copying commands from unknown websites
- Avoid commands containing hidden destructive actions
- Avoid disabling security protections merely to complete installation

---

## 34. Vercel Security Checklist

The future Vercel project should:

- Be owned by GEC or Dr. Abbas Ali
- Use multi-factor authentication
- Use a private GitHub repository
- Separate preview and production variables
- Restrict production deployment permissions
- Protect preview deployments containing private data
- Avoid using production personal data in previews
- Review build logs for secret exposure
- Review deployment logs
- Remove unused team members
- Verify custom domains
- Enforce HTTPS
- Review third-party integrations
- Use rollback capability
- Record major production changes

---

## 35. Preview-Environment Security

Preview environments should:

- Avoid real student data
- Use test or anonymised data
- Restrict admin access
- Prevent search-engine indexing
- Avoid sending real operational emails
- Clearly identify themselves as preview
- Use separate environment variables
- Avoid production service-role keys where practical
- Avoid public dummy content being mistaken for real information
- Be removed when no longer needed

---

## 36. Production-Environment Security

Production should:

- Use verified configuration
- Use production-specific secrets
- Restrict administrative access
- Use HTTPS
- Protect admin routes
- Enable database security policies
- Enable logging
- Enable backup
- Enable monitoring
- Use approved email addresses
- Use verified contact information
- Exclude dummy content
- Exclude test accounts
- Exclude test data
- Exclude debug tools
- Avoid verbose error responses

---

## 37. Administrative Route Protection

Security controls must apply to the approved routes recorded in SITEMAP.md. A hidden or omitted route must never be treated as protected merely because it is not linked publicly.

All routes under:

/admin

must be protected except the login and approved recovery routes.

Protection must include:

- Server-side session verification
- Role verification
- Database-policy enforcement
- Redirect for unauthenticated users
- Safe error response for unauthorised users
- No private data in page source for unauthorised users
- No reliance only on hidden navigation
- No sensitive data cached publicly
- No indexing by search engines

---

## 38. Admin Dashboard Security

The administrative dashboard should:

- Display only necessary information
- Mask sensitive fields where appropriate
- Limit bulk actions
- Require confirmation for destructive actions
- Record important changes
- Prevent content editors from accessing student data
- Avoid exposing complete records in browser logs
- Avoid revealing private data through URL parameters
- Restrict exports
- Display session-expiry messages
- Provide secure logout
- Avoid displaying secrets or service configuration

### Event Registration Security

Event registrations must be accessible only to authorised staff.

Exports must follow the CSV export security requirements.

Registration records must not be publicly searchable or indexed.

The event detail page may accept registration submissions only through controlled server-side processing.

Verification metadata does not itself make content accurate. Publication still requires an authorised reviewer and any necessary owner approval.

### Newsletter Security

No newsletter collection, marketing email, or subscription storage should be activated until owner approval, separate marketing consent, unsubscribe handling, provider review, and retention policy are recorded. (D)

---

## 39. Administrative Notes Security

Internal notes may contain sensitive context.

Notes should:

- Be visible only to authorised staff
- Be stored securely
- Record author and time
- Be editable only according to policy
- Avoid unnecessary sensitive personal information
- Avoid insulting, discriminatory, or speculative language
- Avoid medical or legal conclusions
- Avoid storing passwords
- Be included in retention and deletion reviews
- Be protected from public search and indexing

---

## 40. Audit Logging Checklist

Audit logs should record:

- Staff login
- Failed high-risk login events where appropriate
- Account creation
- Account deactivation
- Role changes
- Enquiry assignment
- Enquiry status changes
- Note creation or major edits
- Appointment changes
- Data exports
- Content publication
- Content deletion
- Privacy-request actions
- Security-setting changes
- Important database administration

Audit logs should not record:

- Passwords
- Full authentication tokens
- Secret keys
- Complete sensitive records
- Unnecessary message content

Audit logs should be protected from ordinary editing.

---

## 41. Application Logging Checklist

Technical logs should:

- Record operational events
- Include timestamps
- Use non-sensitive identifiers
- Support incident investigation
- Avoid personal information where possible
- Avoid full form contents
- Avoid passwords and secrets
- Avoid access tokens
- Avoid database credentials
- Avoid detailed internal errors in public responses
- Use appropriate retention
- Restrict staff access

---

## 42. Error-Handling Security

Public errors should:

- Use simple language
- Avoid stack traces
- Avoid file-system paths
- Avoid database details
- Avoid environment-variable names where unnecessary
- Avoid internal service identifiers
- Avoid authentication details
- Avoid personal-data exposure
- Provide a safe retry option
- Provide GEC contact details where appropriate

Detailed errors may be recorded securely for authorised technical review.

---

## 43. Email Security Checklist

Transactional email should:

- Use an approved provider
- Use a GEC-owned account
- Use multi-factor authentication
- Use a verified sending domain when available
- Use SPF, DKIM, and DMARC when a domain is configured (D)
- Avoid including unnecessary personal information
- Avoid sending passwords
- Avoid sending secret admin links
- Avoid exposing private notes
- Avoid putting sensitive data in subject lines
- Use secure admin-dashboard links
- Record delivery status
- Avoid duplicate messages
- Support unsubscribe where marketing email is used
- Separate transactional and marketing consent

---

## 44. Email Content Minimisation

Visitor acknowledgement emails should include only:

- Visitor name
- Enquiry reference
- General enquiry topic
- Expected next step
- GEC contact information

They should not include:

- Complete private message history
- Internal notes
- Financial details
- Staff-only status
- Authentication tokens
- Sensitive profile information

---

## 45. WhatsApp Security and Privacy

Click-to-WhatsApp should:

- Open a pre-filled message only
- Never send automatically
- Avoid adding sensitive form data to the message
- Use an approved GEC number
- Include an accessible label
- Explain that WhatsApp is a third-party service where appropriate
- Avoid exposing staff personal numbers unless approved
- Avoid sharing documents through public links
- Avoid storing WhatsApp credentials in source code

Suggested pre-filled message:

Hello GEC, I would like to discuss overseas education and book a counselling session. (D)

---

## 46. CSV Export Security

CSV export should:

- Require authorised permission
- Record who exported data
- Record export time
- Respect current filters
- Include only necessary columns
- Avoid secret or authentication fields
- Avoid internal system metadata unless needed
- Prevent spreadsheet-formula injection
- Use safe filenames
- Avoid public download URLs
- Expire temporary files
- Avoid automatically emailing exports
- Be reviewed before sharing externally

Cells beginning with formula characters should be safely handled.

---

## 47. File-Upload Security

Version 1 should not accept student-document uploads.

If public image or content uploads are added for administrators later:

- Restrict file types
- Validate file signatures
- Limit file size
- Rename uploaded files
- Store outside executable paths
- Scan for malicious content where appropriate
- Restrict access
- Remove metadata where appropriate
- Prevent script execution
- Avoid trusting file extensions
- Record uploader and time
- Provide deletion controls

A separate review is required before student-document uploads are introduced.

---

## 48. Supabase Storage Security

If Supabase Storage is used:

- Separate public marketing assets from private files
- Use private buckets for restricted content
- Apply storage policies
- Use signed URLs for temporary private access
- Limit signed-URL lifetime
- Avoid public buckets for personal records
- Restrict upload permissions
- Validate file type and size
- Remove abandoned files
- Log important file actions
- Avoid predictable sensitive file names

---

## 49. Personal-Data Retention

GEC should define how long enquiry data is retained.

Suggested initial policy:

- Active enquiries: retained while services or follow-up remain active (D)
- Closed enquiries: retained for twenty-four months unless deletion is requested or another lawful need applies (D)
- Spam records: retained for ninety days for abuse prevention (D)
- Technical logs: retained for thirty to ninety days depending on purpose (D)
- Audit logs: retained for two years or according to approved policy (D)
- Failed email logs: retained for ninety days (D)

Final periods require business and legal review.

Data should not be kept indefinitely without purpose.

---

## 50. Data-Deletion Requests

The website should support a reasonable deletion-request process.

The process should:

1. Receive the request.
2. Verify the requester’s identity appropriately.
3. Identify relevant records.
4. Check whether any retention obligation applies.
5. Delete or anonymise eligible records.
6. Record the action.
7. Confirm completion.
8. Avoid exposing another person’s data.

Suggested response period:

Within thirty days where practical and legally appropriate. (D)

Legal review is required before publishing a formal commitment.

---

## 51. Data-Correction Requests

Visitors should be able to request correction of inaccurate personal information.

The process should:

- Verify identity
- Locate the record
- Record the requested change
- Correct eligible information
- Preserve necessary audit history
- Confirm completion
- Avoid altering records without authorisation

---

## 52. Data-Access Requests

Where required by policy or law, users may request information about their stored data.

Responses should:

- Verify identity
- Include only the requester’s data
- Exclude staff-only security information where lawful
- Avoid exposing third-party data
- Use a secure delivery method
- Record the request and response
- Apply approved timelines

A qualified professional should review the final process.

---

## 53. Privacy Policy Requirements

The privacy policy should accurately explain:

- Organisation identity
- Contact details
- Information collected
- Purpose of collection
- Contact channels
- Legal basis where relevant
- Service providers
- Cookies
- Analytics
- Data storage
- Data retention
- Data sharing
- Security measures
- User rights
- Deletion requests
- Correction requests
- Policy updates
- Contact process

The privacy policy must match the actual system configuration.

---

## 54. Data Sharing Restrictions

Personal data should not be shared with:

- Universities
- Loan providers
- Test-preparation providers
- Accommodation providers
- Travel providers
- Employers
- Marketing partners
- Other consultants

unless:

- The user understands the purpose
- Appropriate consent or another lawful basis exists
- The recipient is approved
- Only required information is shared
- The sharing is documented
- Security expectations are defined

GEC should not sell personal data.

---

## 55. Third-Party Service Review

Before connecting a third-party service, review:

- Purpose
- Data collected
- Data location
- Privacy policy
- Security practices
- Account ownership
- Authentication options
- Staff access
- Data retention
- Data export
- Data deletion
- Sub-processors
- Contract terms
- Cost
- Exit plan
- Breach-notification process

Potential future services include:

- Supabase
- Vercel
- GitHub
- Transactional email provider
- Analytics provider
- Error-monitoring provider
- Spam-protection provider
- WhatsApp

---

## 56. Analytics Security and Privacy

Analytics should:

- Collect only necessary data
- Avoid collecting form contents
- Avoid collecting passwords or tokens
- Avoid recording private admin pages
- Avoid recording sensitive URL parameters
- Respect consent requirements
- Support data retention controls
- Support deletion where required
- Be documented in the privacy policy
- Be disabled in local development where unnecessary

Privacy-conscious analytics should be preferred. (D)

---

## 57. Error-Monitoring Privacy

Error-monitoring tools should:

- Remove personal information where possible
- Mask form fields
- Avoid recording passwords
- Avoid recording tokens
- Avoid recording complete URLs containing private identifiers
- Restrict staff access
- Use appropriate retention
- Separate environments
- Be documented where required
- Support deletion and account closure

---

## 58. Backup Security

Backups should:

- Be encrypted where supported
- Be access-restricted
- Be stored separately from the primary system
- Be monitored
- Follow retention rules
- Be tested for restoration
- Avoid unnecessary copies
- Avoid public links
- Exclude secrets where possible
- Be deleted securely after expiration
- Use GEC-owned accounts

Backup existence should be verified rather than assumed.

---

## 59. Restore Testing

At planned intervals:

- Select a safe test environment
- Restore a recent backup
- Verify database integrity
- Verify record counts
- Verify authentication configuration
- Verify application compatibility
- Record the test
- Correct failures
- Avoid restoring production personal data into an insecure environment

Suggested restore-test frequency:

Every six months. (D)

---

## 60. Business-Continuity Checklist

GEC should retain access to:

- Domain registrar
- GitHub repository
- Vercel project
- Supabase project
- Email provider
- Business email
- Analytics
- Error monitoring
- Backups
- Recovery codes
- Documentation

No single external developer should be the only person capable of restoring the service.

---

## 61. Domain Security

The domain account should:

- Be owned by GEC or Dr. Abbas Ali
- Use multi-factor authentication
- Use a secure recovery email
- Use registrar lock
- Use automatic renewal where appropriate (D)
- Maintain current payment details
- Restrict DNS changes
- Record authorised administrators
- Review DNS records
- Remove unused records
- Monitor expiration

---

## 62. DNS and Email-Domain Security

When professional email is configured:

- Verify required DNS records
- Configure SPF (D)
- Configure DKIM (D)
- Configure DMARC gradually and carefully (D)
- Avoid overly permissive SPF records
- Monitor failed email authentication
- Remove obsolete sending services
- Protect domain-administration accounts
- Avoid publishing internal system details unnecessarily

---

## 63. Content Security

Published content should be reviewed for:

- Personal-data exposure
- Private email addresses
- Private phone numbers
- Unauthorised photographs
- Unauthorised university logos
- Unverified partnerships
- Fake testimonials
- Hidden document metadata
- Private file links
- Outdated visa information
- Misleading claims
- Public “(D)” markers
- Embedded third-party trackers
- Unsafe external links

---

## 64. External-Link Security

External links should:

- Point to trusted sources
- Be reviewed periodically
- Avoid misleading display text
- Avoid embedding authentication tokens
- Use safe new-tab behaviour where used
- Avoid linking to unofficial visa-payment pages
- Clearly distinguish official sources
- Be removed when no longer trustworthy

---

## 65. University and Scholarship Information

Time-sensitive content should include:

- Official source
- Last verified date
- Responsible editor
- Disclaimer
- Review schedule

Do not publish:

- Unverified scholarship amounts
- Unverified deadlines
- Unverified visa rules
- Guaranteed outcomes
- Unauthorised university branding
- Fabricated partnerships

---

## 66. Dummy Content Security Rule

Every invented or unconfirmed item must contain:

(D)

During development:

- Dummy content may appear only in local or controlled preview environments.
- Dummy content should be visibly identifiable to reviewers.
- Dummy testimonials must not appear genuine.
- Dummy institutions must not appear as partners.
- Dummy events must not accept real registrations.
- Dummy contact details must not receive real student enquiries.
- Dummy statistics must not appear as verified achievements.

Production should include an automated or manual check for “(D)”. (D)

## 66.1 Dummy Content Release Control

Before any production launch:

1. Search all public content and configuration for “(D)”.
2. Classify each occurrence as approved, replaced, removed, or internal-only.
3. Prevent public release of unresolved dummy content.
4. Record the reviewer.
5. Record the review date.
6. Record owner sign-off.
7. Repeat the scan after final production build preparation.

The responsible role remains proposed until assigned. (D)

---

## 67. Search-Engine Security

Search engines must not index:

- Administrative pages
- Login pages where unnecessary
- Private previews
- Draft content
- Thank-you pages
- Form-error pages
- Private search results
- Personal records
- Uploaded private files
- Dummy pages

Robots rules are not access control.

Private data must remain protected even when a URL is known.

---

## 68. Caching Security

Private pages and responses should:

- Avoid public caching
- Use appropriate cache-control settings
- Avoid shared-cache exposure
- Avoid static generation of personal records
- Avoid embedding personal records into public page data
- Clear sensitive client state after logout where appropriate

Public content may use caching after review.

---

## 69. Browser-Side Data Storage

Avoid storing sensitive data in:

- localStorage
- sessionStorage
- IndexedDB
- Browser-readable cookies
- URL query strings
- Browser history

Temporary form state should contain only necessary data and should be cleared appropriately.

---

## 70. URL Security

URLs must not contain:

- Passwords
- API keys
- Authentication tokens
- Full personal messages
- Private notes
- Sensitive identifiers
- Email addresses where avoidable
- Phone numbers where avoidable

Private record identifiers should not be treated as authorisation.

---

## 71. Administrative Search Security

Admin search should:

- Require authentication
- Enforce role permissions
- Limit result size
- Avoid exposing records outside the user’s scope
- Escape search input
- Apply rate limits where needed
- Avoid logging sensitive search terms unnecessarily
- Prevent search over secret fields

---

## 72. Destructive-Action Protection

Actions such as deletion, account deactivation, role changes, and bulk updates should:

- Require appropriate role
- Display a clear confirmation
- Explain the effect
- Prevent accidental repeated submission
- Record an audit event
- Support soft deletion where appropriate
- Require re-authentication for highly sensitive operations where appropriate (D)
- Avoid permanent deletion without policy review

---

## 73. Soft Deletion and Archiving

Where appropriate:

- Mark records as deleted or archived
- Remove them from ordinary views
- Restrict access
- Preserve necessary audit history
- Apply final-deletion schedules
- Honour approved deletion requests
- Avoid indefinite retention

Not every record requires soft deletion.

---

## 74. Data Export and Offline Copies

Staff should not store exported personal data:

- On public computers
- In personal email
- In unencrypted cloud drives
- In public messaging groups
- In unapproved USB devices
- In shared spreadsheets without controls

Offline copies should:

- Be limited
- Have a clear purpose
- Be access-restricted
- Be deleted when no longer needed
- Be included in incident review where exposed

---

## 75. Staff Security Training

Staff should be trained to:

- Use strong passwords
- Use multi-factor authentication
- Identify phishing
- Protect student information
- Avoid sharing accounts
- Avoid downloading unnecessary data
- Handle privacy requests
- Report suspicious activity
- Use secure devices
- Lock screens
- Avoid public Wi-Fi for sensitive work without protection
- Verify university and scholarship sources
- Avoid sharing credentials through WhatsApp or email
- Recognise social-engineering attempts

---

## 76. Device Security

Devices accessing the admin dashboard should:

- Use supported operating systems
- Install security updates
- Use screen lock
- Use device encryption where available
- Use reputable anti-malware protection where appropriate
- Avoid shared public devices
- Avoid saving passwords in insecure locations
- Use secure browsers
- Remove access after device loss
- Report suspected compromise promptly

---

## 77. Phishing Protection

Staff should verify:

- Sender address
- Domain spelling
- Unexpected login links
- Password-reset messages
- Requests for API keys
- Requests for database exports
- Requests to change bank information
- Requests to change DNS
- Requests to install software
- Urgent messages requesting secrecy

No legitimate provider should require staff to share passwords or recovery codes.

---

## 78. Social-Engineering Protection

Before sharing data or changing access:

- Verify the requester’s identity
- Use a second communication channel for high-risk requests
- Confirm authority
- Record the request
- Avoid acting only because a message sounds urgent
- Avoid sharing student data with unverified university representatives
- Avoid granting temporary administrator access without review

---

## 79. Security-Monitoring Checklist

Monitor where supported:

- Repeated login failures
- New administrator accounts
- Role changes
- Unusual data exports
- High-volume form submissions
- Spam spikes
- Unexpected database access
- Email-delivery failures
- Secret-scanning alerts
- Dependency alerts
- Production errors
- Unusual storage activity
- Domain or DNS changes

---

## 80. Vulnerability Management

The project should:

- Monitor framework updates
- Monitor dependency alerts
- Review Supabase security notices
- Review Vercel security notices
- Review GitHub alerts
- Apply urgent security updates promptly
- Test updates before production
- Record major security changes
- Remove unsupported software
- Avoid delaying critical fixes without documented reason

---

## 81. Security Testing Before Launch

Before launch, test:

- Unauthenticated access to admin routes
- Counsellor access restrictions
- Content-editor restrictions
- Row-level security
- Public form validation
- Rate limiting
- Duplicate handling
- Spam handling
- Script injection attempts
- Database-injection resistance
- Session expiration
- Logout
- Password recovery
- Account deactivation
- Data export permissions
- Error messages
- File access
- Private-page caching
- Environment-variable exposure
- Source-map exposure where relevant
- Search-engine indexing rules

Testing must use authorised systems only.

---

## 82. Manual Security Review

A manual review should inspect:

- Source code
- Environment-variable use
- Authentication flow
- Admin route protection
- Database policies
- Storage policies
- Public forms
- Logging
- Email templates
- CSV exports
- Third-party scripts
- Analytics
- Error monitoring
- Security headers
- Privacy-policy accuracy
- Dummy-content removal

---

## 83. Launch Security Checklist

Before production launch, confirm:

- HTTPS is active
- Domain ownership is secured
- Multi-factor authentication is active
- Repository access is reviewed
- Vercel access is reviewed
- Supabase access is reviewed
- Production secrets are configured
- No secrets are committed
- Row-level security is active
- Admin routes are protected
- Staff roles are tested
- Public forms are rate limited
- Spam protection works
- Emails are tested
- Error messages are safe
- Privacy policy matches implementation
- Data-retention periods are approved
- Backup is configured
- Restore process is documented
- Logging is configured
- Monitoring is configured
- Legal pages are reviewed
- All public “(D)” markers are removed
- Test users and test records are removed
- Preview data is not mixed with production
- Rollback is available
- Incident contacts are known

---

## 84. Post-Launch Weekly Checks

Each week:

- Review failed form submissions
- Review spam activity
- Review failed logins
- Review email failures
- Review application errors
- Review unexpected admin activity
- Review access requests
- Review urgent dependency alerts
- Review content-security concerns

---

## 85. Post-Launch Monthly Checks

Each month:

- Review staff accounts
- Disable inactive accounts
- Review permissions
- Review data exports
- Review database usage
- Review storage usage
- Review backup status
- Review dependency updates
- Review broken links
- Review third-party access
- Review data-retention actions
- Review logs and monitoring

---

## 86. Quarterly Security Review

Every quarter:

- Review authentication policy
- Review multi-factor authentication
- Review administrator accounts
- Review row-level security
- Review storage policies
- Review environment variables
- Rotate appropriate secrets
- Review privacy policy
- Review incident history
- Review staff training
- Test backups
- Test access removal
- Review third-party providers
- Review analytics and cookies
- Review legal requirements

Suggested frequency is subject to approval. (D)

---

## 87. Annual Security Review

At least annually:

- Perform a full access review
- Perform a full data audit
- Review retention schedules
- Review business-continuity plans
- Review domain security
- Review account recovery
- Review staff training
- Review provider contracts
- Review legal documents
- Review backup restoration
- Review threat model
- Review major architecture changes
- Review whether sensitive-document features remain excluded

---

## 88. Incident Classification

Suggested incident levels:

### Low

Minor issue with no confirmed data exposure. (D)

### Medium

Service disruption or limited unauthorised access with contained impact. (D)

### High

Confirmed exposure of personal data, administrator compromise, or significant service disruption. (D)

### Critical

Large-scale personal-data exposure, full infrastructure compromise, or loss of control over core accounts. (D)

Final incident levels and responsibilities require approval.

---

## 89. Incident-Response Process

If a suspected incident occurs:

1. Record the time and initial report.
2. Restrict affected access.
3. Preserve relevant logs.
4. Identify affected systems.
5. Determine whether personal data is involved.
6. Revoke compromised sessions.
7. Rotate exposed secrets.
8. Disable compromised accounts.
9. Restore a safe version.
10. Inform authorised GEC personnel.
11. Seek professional assistance where required.
12. Notify affected parties where legally required.
13. Record actions taken.
14. Correct the root cause.
15. Review lessons learned.

Do not delete evidence before review.

---

## 90. Lost-Device Response

If a staff device is lost:

- Report immediately
- Disable affected sessions
- Reset relevant credentials
- Remove device access where supported
- Determine whether data was stored locally
- Review recent account activity
- Preserve incident records
- Notify affected users where required
- Review whether exports were present

---

## 91. Exposed-Secret Response

If a secret is exposed:

1. Revoke or rotate it immediately.
2. Remove it from current code and configuration.
3. Review logs for misuse.
4. Remove it from public history where practical.
5. Replace affected deployments.
6. Review related secrets.
7. Record the incident.
8. Correct the process that allowed exposure.

Deleting a secret from the latest file does not remove it from Git history.

---

## 92. Compromised-Staff-Account Response

If a staff account is suspected to be compromised:

- Disable the account
- Revoke sessions
- Reset authentication
- Review role and permissions
- Review login history
- Review exports
- Review status changes
- Review notes and deletions
- Restore altered records where possible
- Notify authorised personnel
- Record the incident

---

## 93. Data-Breach Notification Planning

GEC should obtain qualified legal guidance regarding:

- What constitutes a reportable breach
- Notification timelines
- Authorities to contact
- User-notification requirements
- Required documentation
- Cross-border considerations
- Provider responsibilities

No fixed legal commitment should be published without review.

---

## 94. Security Ownership

Suggested responsibilities:

### Business Owner

Dr. Abbas Ali

Responsibilities:

- Approve account ownership
- Approve staff access
- Approve service providers
- Approve data-retention policy
- Approve launch
- Receive incident reports

### Technical Administrator (D)

Responsibilities:

- Maintain infrastructure
- Review alerts
- Manage secrets
- Apply updates
- Test backups
- Support incident response

### Privacy Contact (D)

Responsibilities:

- Handle privacy requests
- Review consent
- Coordinate deletion and correction
- Maintain privacy documentation

### Content Reviewer (D)

Responsibilities:

- Verify external facts
- Review personal information
- Remove dummy content
- Review university and scholarship claims

One person may hold more than one role during the early stage, but responsibilities should remain documented.

## 94.1 Responsibility and Escalation Requirements

Before any live personal data is collected, GEC must assign:

- Form and Enquiry Owner (D)
- Privacy Request Owner (D)
- Security Incident Owner (D)
- Backup and Recovery Owner (D)
- Content Verification Owner (D)
- Dummy Content Review Owner (D)

The business owner remains responsible for approving public business information and production launch.

Role assignment must be recorded in DECISIONS_LOG.md before the related workflow becomes active.

---

## 95. Security Decision Recording

Important security decisions should be recorded in:

DECISIONS_LOG.md

Examples:

- Authentication method
- Multi-factor authentication policy
- Session duration
- Staff roles
- Data-retention periods
- Email provider
- Analytics provider
- Spam protection
- Backup provider
- Incident contacts
- Document-upload exclusion
- Production access policy

---

## 96. Commands Requiring Extra Caution

The project owner should carefully review commands containing:

- delete
- remove
- rm
- rmdir
- del
- clean
- reset
- force
- drop
- truncate
- destroy
- revoke
- rotate
- migrate reset
- database reset
- format
- overwrite

Before approving such a command, confirm:

- What it changes
- Which environment it affects
- Whether a backup exists
- Whether it can be reversed
- Whether personal data is involved
- Whether the command is necessary

---

## 97. Prohibited Security Practices

The project must not:

- Store passwords in plain text
- Share staff accounts
- Expose service-role keys
- Commit secrets
- Disable row-level security for convenience
- Use production data in public previews
- Collect unnecessary identity documents
- Log passwords or tokens
- Publish private admin URLs as security protection
- Trust client-side validation alone
- Allow unrestricted CSV exports
- Send passwords by email
- Place secrets in screenshots
- Use dummy testimonials as real
- Claim compliance without review
- Ignore critical security alerts
- Depend only on obscurity
- Treat HTTPS as complete security

---

## 98. Security Acceptance Criteria

The security planning stage may be considered complete when:

- Data scope is defined
- Sensitive document collection is excluded from Version 1
- Public form requirements are defined
- Consent requirements are defined
- Authentication requirements are defined
- Role requirements are defined
- Supabase security requirements are defined
- Environment-variable rules are defined
- GitHub and Vercel requirements are defined
- Logging requirements are defined
- Backup requirements are defined
- Privacy-request processes are defined
- Incident response is defined
- Launch checks are defined
- Ongoing review is defined
- Owner approval is recorded

---

## 99. Current Security Status

At this planning stage:

Website implementation has not started.

- The planning package contains all nine intended planning documents.
- The project remains in planning review and correction.
- No website framework has been installed.
- No Git repository has been initialised.
- No database has been created.
- No authentication system has been created.
- No production service has been connected.
- No public form is active.
- No student information is being collected through the website.
- No production secrets have been created.
- No deployment has occurred.

The planning package contains:

- START_HERE.md
- PROJECT_REQUIREMENTS.md
- SITEMAP.md
- CONTENT_REQUIREMENTS.md
- DESIGN_DIRECTION.md
- DEVELOPMENT_PLAN.md
- SECURITY_CHECKLIST.md
- DECISIONS_LOG.md
- README.md

Security and privacy policies that require owner, operational, or professional approval remain unresolved until explicitly approved.

---

## 100. Dummy Security Decision Rule

All unconfirmed security, privacy, operational, provider, timeline, retention, role, and policy decisions must end with:

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

## 101. Security Approval Requirement

This security checklist must be reviewed before:

- Installing website dependencies
- Creating the Supabase project
- Creating database tables
- Creating row-level security policies
- Creating staff accounts
- Creating public forms
- Connecting email services
- Connecting analytics
- Connecting error monitoring
- Enabling CSV export
- Adding file uploads
- Creating preview deployments
- Creating production deployments
- Purchasing or connecting a domain
- Collecting personal information
- Launching the website

Any major security or privacy decision made later should be recorded in DECISIONS_LOG.md.
