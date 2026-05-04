"use client";

export function ContactForm() {
  return (
    <form
      className="space-y-4 rounded-2xl border border-mist bg-white p-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label className="font-dm text-xs font-medium text-slate" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          className="mt-1 w-full rounded-lg border border-mist px-3 py-2 font-dm text-sm outline-none ring-terra/40 focus:ring-2"
        />
      </div>
      <div>
        <label className="font-dm text-xs font-medium text-slate" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-mist px-3 py-2 font-dm text-sm outline-none ring-terra/40 focus:ring-2"
        />
      </div>
      <div>
        <label className="font-dm text-xs font-medium text-slate" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          className="mt-1 w-full rounded-lg border border-mist px-3 py-2 font-dm text-sm outline-none ring-terra/40 focus:ring-2"
        />
      </div>
      <div>
        <label className="font-dm text-xs font-medium text-slate" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1 w-full rounded-lg border border-mist px-3 py-2 font-dm text-sm outline-none ring-terra/40 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-terra px-4 py-2.5 font-dm text-sm font-medium text-cream"
      >
        Send Enquiry
      </button>
      <p className="font-dm text-xs text-slate">
        This form is not yet active. Please call us on (08) 9446 2010 for urgent
        enquiries.
      </p>
    </form>
  );
}
