import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    body: `Welcome to FLink ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our mobile application and services.`,
  },
  {
    title: "2. Information Collection",
    body: `We collect information that you provide directly to us, such as when you create an account, update your profile, or list products.`,
    items: [
      "Personal Identifiers: Name, email, phone number, and username.",
      "Profile Information: Bio, farm location, and profile picture.",
      "Transaction Data: Details about products you buy or sell.",
      "Technical Data: Device information, IP address, and usage patterns.",
    ],
  },
  {
    title: "3. App Permissions",
    body: `To provide a complete experience, FLink may request access to the following device features when necessary:`,
    items: [
      "Camera and Gallery: To allow you to upload profile pictures and product images.",
      "Location: To help other users find produce near them, only when explicitly shared.",
      "Notifications: To keep you updated on orders, market insights, and weather alerts.",
    ],
  },
  {
    title: "4. How We Use Data",
    body: `We use the information we collect to support the core Flink experience and improve the platform over time.`,
    items: [
      "Provide, maintain, and improve our services.",
      "Facilitate connections between buyers and farmers.",
      "Process transactions and send related information.",
      "Personalize your experience with relevant market updates.",
      "Ensure safety and prevent fraudulent activity.",
    ],
  },
  {
    title: "5. Data Sharing and Disclosure",
    body: `We do not sell your personal data. We may share information in limited cases where it is necessary to operate the platform responsibly.`,
    items: [
      "With other users: Your profile and product listings are visible to others to facilitate trade.",
      "With service providers: We use third-party tools for image storage and backend hosting.",
      "For legal reasons: If required by law or to protect the rights and safety of our community.",
    ],
  },
  {
    title: "6. Data Retention and Deletion",
    body: `We retain your data for as long as your account remains active. You can update your profile at any time in Account Settings. You can also permanently delete your account and associated data directly from the app where that option is available.`,
  },
  {
    title: "7. Security",
    body: `We implement industry-standard security measures to protect your data. However, no method of transmission over the internet or mobile storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "8. Contact Us",
    body: `If you have any questions about this Privacy Policy, please contact our legal team at compliance@flink.ag.`,
  },
];

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ea] text-slate-950">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12%] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#1f7a45]/14 blur-3xl" />
        <div className="absolute right-[-10%] top-[10rem] h-[22rem] w-[22rem] rounded-full bg-[#d9a441]/14 blur-3xl" />
      </div>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/8 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mt-6 rounded-[2rem] border border-slate-900/8 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 border-b border-slate-900/8 pb-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#dff2dd] px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#1f7a45]">
                  <ShieldCheck className="h-4 w-4" />
                  Legal and Compliance
                </div>
                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                  Privacy Policy
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  This policy explains how Flink collects, uses and protects
                  information across the platform and related services.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-900/8 bg-[#fcfbf7] px-5 py-4 text-sm text-slate-600">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Last updated
                </p>
                <p className="mt-2 font-medium text-slate-950">March 8, 2026</p>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              {sections.map((section) => (
                <section key={section.title} className="rounded-[1.5rem] bg-[#fcfbf7] p-6 ring-1 ring-slate-900/6">
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                    {section.body}
                  </p>

                  {section.items ? (
                    <ul className="mt-4 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f7a45]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-10 border-t border-slate-900/8 pt-8 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Flink Legal Framework v1.0.0
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
