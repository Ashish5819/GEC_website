"use client";

import { FormEvent, useState } from "react";

export function LocalForm({ compact = false }: { compact?: boolean }) {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setMessage("Local validation passed. Nothing was sent or stored. (D)");
  }
  return <form className={compact ? "local-form compact" : "local-form"} onSubmit={submit} noValidate>
    <div className="form-notice" role="note"><strong>Local demonstration only.</strong> Use sample information—nothing entered here is transmitted or stored. (D)</div>
    <div className="field-grid">
      <label><span>Name <b aria-hidden="true">*</b></span><input name="name" autoComplete="off" required maxLength={80} placeholder="Sample name (D)" /></label>
      <label><span>Email <b aria-hidden="true">*</b></span><input name="email" type="email" autoComplete="off" required maxLength={120} placeholder="sample@example.invalid (D)" /></label>
      {!compact && <label><span>Area of interest</span><select name="interest" defaultValue=""><option value="">Choose a sample option</option><option>Study destination (D)</option><option>Program guidance (D)</option><option>Planned service (D)</option></select></label>}
      {!compact && <label><span>Preferred conversation date</span><input name="date" type="date" /></label>}
    </div>
    <label><span>{compact ? "What would you like to explore?" : "Message"} <b aria-hidden="true">*</b></span><textarea name="message" required maxLength={500} rows={compact ? 3 : 5} placeholder="Enter sample information only (D)" /></label>
    <label className="check"><input type="checkbox" required /><span>I understand this is a local demonstration and does not create an appointment or submit information. (D)</span></label>
    <button className="button" type="submit">Validate sample enquiry (D)</button>
    <p className="form-result" aria-live="polite">{message}</p>
  </form>;
}
