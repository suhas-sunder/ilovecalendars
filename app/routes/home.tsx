// app/routes/_index.tsx
import type { Route } from "./+types/home";
import { json } from "@remix-run/node";

export function meta({}: Route.MetaArgs) {
  const title =
    "I Love Calendars   Cute Printable Calendars, Planners & Trackers";
  const description =
    "I Love Calendars is your cozy hub for free printable calendars, cute monthly planners, habit & budget trackers, holiday calendars, and planner stickers.";
  const url = "https://ilovecalendars.com/";
  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "printable calendars,cute calendars,monthly calendar,2025 calendar,planner templates,habit tracker,budget tracker,calendar stickers,undated calendar,weekly planner,PDF calendar",
    },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { rel: "canonical", href: url },
    { name: "theme-color", content: "#fce7f3" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return json({
    message: context.VALUE_FROM_EXPRESS,
    nowISO: new Date().toISOString(),
  });
}

export default function Home({
  loaderData: { nowISO, message },
}: Route.ComponentProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "I Love Calendars",
        url: "https://ilovecalendars.com/",
        description:
          "Cute printable calendars, planners, and trackers. Free monthly & yearly PDFs, weekly planners, habit/budget trackers, and planner stickers.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://ilovecalendars.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "I Love Calendars",
        url: "https://ilovecalendars.com/",
        logo: "https://ilovecalendars.com/logo.png",
      },
      {
        "@type": "ItemList",
        name: "Popular Calendar Categories",
        itemListElement: [
          "Printable Monthly Calendars",
          "Yearly Calendars",
          "Weekly Planners",
          "Habit Trackers",
          "Budget Trackers",
          "Holiday Calendars",
          "Cute Planner Stickers",
          "Undated Calendars",
          "Coloring Calendars for Kids",
        ].map((name, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Are the calendars free to download?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Most calendars and planners are free to download as printable PDFs for personal use.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer undated calendars?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer both dated and undated templates so you can start any month and reuse layouts every year.",
            },
          },
          {
            "@type": "Question",
            name: "Can I print in A4, Letter, or Half-Letter?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our PDFs are optimized for US Letter and A4, with print tips to scale for Half-Letter and A5 planners.",
            },
          },
          {
            "@type": "Question",
            name: "Do you have cute/esthetic styles?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! We design pastel, kawaii, minimalist, seasonal, and coloring-friendly themes for calendar lovers.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://ilovecalendars.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Printable Calendars",
            item: "https://ilovecalendars.com/calendars",
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-pink-50/30 text-rose-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top bar */}
      <div className="w-full border-b border-pink-100 bg-pink-50/50">
        <div className="mx-auto max-w-6xl px-4 py-2 text-sm text-rose-700">
          Fresh templates arriving soon • Last updated{" "}
          {new Date(nowISO).toLocaleDateString()}
          {message ? <span className="sr-only"> {message}</span> : null}
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-rose-900">
              I Love Calendars
            </h1>
            <p className="mt-4 text-lg text-rose-800">
              Cute, printable <strong>monthly & yearly calendars</strong>, cozy
              <strong> weekly planners</strong>, and helpful{" "}
              <strong>trackers</strong> all in pastel, kawaii, and minimalist
              styles. Print at home. Plan with joy. ✨
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/"
                className="rounded-xl bg-rose-600 px-4 py-2 text-white shadow hover:bg-rose-700"
              >
                Browse Monthly Calendars
              </a>
              <a
                href="/"
                className="rounded-xl border border-rose-300 bg-white px-4 py-2 text-rose-800 shadow-sm hover:bg-rose-50"
              >
                Weekly Planners
              </a>
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-3xl border border-pink-200 bg-white/70 p-5 shadow-sm">
              <h2 className="text-base font-semibold text-rose-900">
                Popular this month
              </h2>
              <ul className="mt-3 grid gap-2 text-sm text-rose-800 sm:grid-cols-2">
                <li>• 2025 Monthly Calendar (Pastel)</li>
                <li>• Undated Minimal Monthly</li>
                <li>• Kawaii Habit Tracker</li>
                <li>• Weekly Horizontal Planner</li>
                <li>• Budget Tracker (Simple)</li>
                <li>• Holiday Calendar Pack</li>
              </ul>
              <a
                href="#featured"
                className="mt-4 inline-block rounded-lg bg-rose-100 px-3 py-1 text-xs font-medium text-rose-800 hover:bg-rose-200"
              >
                See all featured templates →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <h2 className="text-2xl font-bold text-rose-900">Browse by category</h2>
        <p className="mt-2 text-rose-800">
          Free printable PDFs, ready for A4 & US Letter. Pastel, kawaii,
          minimalist, and seasonal themes.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/",
              title: "Printable Monthly Calendars",
              desc: "Dated & undated. Pastel & minimalist.",
            },
            {
              href: "/",
              title: "Yearly Calendars",
              desc: "Annual overviews and wall-friendly layouts.",
            },
            {
              href: "/",
              title: "Weekly Planners",
              desc: "Horizontal & vertical. Monday/Sunday start.",
            },
            {
              href: "/",
              title: "Habit Trackers",
              desc: "Daily chains, 30-day, 12-month dashboards.",
            },
            {
              href: "/",
              title: "Budget Trackers",
              desc: "Simple expense logs & monthly budget sheets.",
            },
            {
              href: "/",
              title: "Holiday Calendars",
              desc: "Major holidays & seasonal printable packs.",
            },
          ].map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <h3 className="text-base font-semibold text-rose-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-rose-800">{c.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* SEO copy block */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-pink-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-rose-900">
            Free Cute Calendars & Planner Templates (PDF)
          </h2>
          <p className="mt-3 text-rose-800">
            Whether you’re planning school, work, family, or self-care, you’ll
            find
            <strong> printable monthly calendars</strong>,{" "}
            <strong>yearly overviews</strong>,<strong> weekly planners</strong>,
            and <strong>trackers</strong> you can print at home. Our designs
            focus on legibility, gentle pastel color, and easy ink-friendly
            layouts.
          </p>
          <ul className="mt-4 grid gap-2 text-rose-900 sm:grid-cols-2">
            <li className="list-disc list-inside">
              Pastel & kawaii calendar styles for cozy planners
            </li>
            <li className="list-disc list-inside">
              Monday or Sunday start options
            </li>
            <li className="list-disc list-inside">
              Undated templates you can reuse every year
            </li>
            <li className="list-disc list-inside">
              A4, US Letter & Half-Letter print tips
            </li>
          </ul>
        </div>
      </section>

      {/* Featured Templates */}
      <section id="features" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Featured Templates People Love
        </h2>
        <p className="mt-2 text-rose-800">
          Our most downloaded <strong>printable calendar PDFs</strong> and{" "}
          <strong>planner pages</strong> cute, minimalist, and
          classroom-friendly. Optimized for <strong>US Letter</strong> and{" "}
          <strong>A4</strong>.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/calendars/monthly/2025-pastel",
              title: "2025 Monthly Calendar (Pastel)",
              desc: "Soft colors, clean typography, Monday/Sunday start options.",
            },
            {
              href: "/calendars/monthly/undated-minimal",
              title: "Undated Monthly (Minimal)",
              desc: "Ink-friendly, reusable every year. Perfect for long-term planning.",
            },
            {
              href: "/planners/weekly/horizontal",
              title: "Weekly Planner (Horizontal)",
              desc: "Wide daily blocks for work + school. Great for time-blocking.",
            },
            {
              href: "/trackers/habit/30-day",
              title: "30-Day Habit Tracker",
              desc: "Daily chain layout for streaks, wellness, and routines.",
            },
            {
              href: "/trackers/habit/12-month",
              title: "12-Month Habit Dashboard",
              desc: "Bird’s-eye view to track consistency all year.",
            },
            {
              href: "/trackers/budget/monthly",
              title: "Monthly Budget Planner",
              desc: "Income, expenses, and savings goals on one page.",
            },
            {
              href: "/planners/meal/weekly",
              title: "Weekly Meal Planner + Grocery List",
              desc: "Plan meals and shop smarter with one printable.",
            },
            {
              href: "/calendars/holiday/2025",
              title: "2025 Holiday Calendar Pack",
              desc: "Major holidays + seasonal themes. Great for wall calendars.",
            },
            {
              href: "/planners/study/student-kit",
              title: "Student Planner Kit",
              desc: "Class schedule, assignment tracker, revision plans.",
            },
          ].map((f) => (
            <a
              key={f.href}
              href={f.href}
              className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <h3 className="text-base font-semibold text-rose-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-rose-800">{f.desc}</p>
              <span className="mt-3 inline-block text-xs font-medium text-rose-700">
                Download PDF →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-pink-200 bg-rose-50/60 p-4 text-sm text-rose-900">
          <strong>Tip:</strong> All featured templates include print-ready
          margins, high-contrast text, and pastel accents that look great on
          standard home printers.
        </div>
      </section>

      {/* Audience Use-Cases */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Made for Learners, Educators & Organized Families
        </h2>
        <p className="mt-2 text-rose-800">
          Cute calendars are fun, but they’re also practical. These printable
          planners help you plan school, work, home, and wellness with clarity.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">
              Students & Study Buddies
            </h3>
            <ul className="mt-2 list-inside list-disc text-sm text-rose-800">
              <li>Semester calendars and class schedules</li>
              <li>Assignment & revision planners</li>
              <li>Exam countdowns and study habit trackers</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">
              Teachers & Classrooms
            </h3>
            <ul className="mt-2 list-inside list-disc text-sm text-rose-800">
              <li>Monthly & yearly wall calendars</li>
              <li>Lesson planning pages and attendance logs</li>
              <li>Holiday & event calendars for parents</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">
              Families & Home Planners
            </h3>
            <ul className="mt-2 list-inside list-disc text-sm text-rose-800">
              <li>Meal plans, cleaning rotations, and chore charts</li>
              <li>Budget and bill trackers</li>
              <li>Birthday & gift planners, vacation calendars</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">
              Small Business & Creators
            </h3>
            <ul className="mt-2 list-inside list-disc text-sm text-rose-800">
              <li>Content calendars (social, blog, newsletter)</li>
              <li>Project timelines and launch checklists</li>
              <li>Invoice and simple expense logs</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Print & Sizing Tips */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Print Tips for A4, US Letter & Half-Letter
        </h2>
        <p className="mt-2 text-rose-800">
          Every template is a high-resolution PDF. Use the settings below for
          best results on
          <strong> home printers</strong> and office copiers.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">Page Size</h3>
            <p className="mt-2 text-sm text-rose-800">
              Default: <strong>US Letter (8.5×11)</strong> & <strong>A4</strong>
              . For Half-Letter/A5, select “Scale to 50–70%” or “Booklet”
              depending on your printer.
            </p>
          </div>
          <div className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">
              Margins & Fit
            </h3>
            <p className="mt-2 text-sm text-rose-800">
              Use “Fit to printable area” if your printer clips edges. Our
              margins are designed to avoid cut-offs.
            </p>
          </div>
          <div className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">
              Ink-Friendly Options
            </h3>
            <p className="mt-2 text-sm text-rose-800">
              Choose the <strong>minimalist black-and-white</strong> versions,
              or lower color intensity to save ink.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-pink-200 bg-rose-50/60 p-4 text-sm text-rose-900">
          <strong>Pro tip:</strong> For wall calendars, print on thicker matte
          paper (90–120 gsm) and use a clipboard or binder rings.
        </div>
      </section>

      {/* Seasonal Drops */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Seasonal Calendars & Holiday Packs
        </h2>
        <p className="mt-2 text-rose-800">
          Fresh sets for each season and celebration perfect for classroom
          walls, family fridges, and cozy planners.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "/calendars/seasonal/spring",
              title: "Spring Pastels",
              desc: "Flowers, gentle greens, soft pinks.",
            },
            {
              href: "/calendars/seasonal/summer",
              title: "Summer Brights",
              desc: "Sunny highlights and beachy icons.",
            },
            {
              href: "/calendars/seasonal/autumn",
              title: "Autumn Cozy",
              desc: "Warm neutrals, pumpkin accents.",
            },
            {
              href: "/calendars/seasonal/winter",
              title: "Winter Calm",
              desc: "Snowy blues, minimal sparkle.",
            },
          ].map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <h3 className="text-sm font-semibold text-rose-900">{c.title}</h3>
              <p className="mt-1 text-xs text-rose-800">{c.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Template Categories Hub */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Browse Popular Calendar Templates
        </h2>
        <p className="mt-2 text-rose-800">
          Find the exact <strong>printable calendar</strong> you need undated,
          monthly, yearly, minimalist, cute pastel, academic, and more. All
          files are <strong>PDF</strong> and print-ready.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/calendars/monthly",
              title: "Monthly Calendars",
              desc: "Dated & undated months, Monday/Sunday start.",
            },
            {
              href: "/calendars/yearly",
              title: "Yearly Calendars",
              desc: "Year at a glance, wall-friendly posters.",
            },
            {
              href: "/calendars/academic",
              title: "Academic Calendars",
              desc: "Aug–Jul formats for students & teachers.",
            },
            {
              href: "/planners/weekly",
              title: "Weekly Planners",
              desc: "Horizontal & vertical layouts for time blocks.",
            },
            {
              href: "/trackers/habit",
              title: "Habit Trackers",
              desc: "30-day, 12-month, wellness & study streaks.",
            },
            {
              href: "/trackers/meal",
              title: "Meal Planners",
              desc: "Weekly plan + grocery list printables.",
            },
            {
              href: "/trackers/budget",
              title: "Budget Calendars",
              desc: "Bills, due dates, and savings goals.",
            },
            {
              href: "/calendars/holiday",
              title: "Holiday Packs",
              desc: "Major holidays and seasonal themes.",
            },
            {
              href: "/stickers/icons",
              title: "Stickers & Icons",
              desc: "Printable stickers for events and tasks.",
            },
          ].map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <h3 className="text-base font-semibold text-rose-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-rose-800">{c.desc}</p>
              <span className="mt-3 inline-block text-xs font-medium text-rose-700">
                Explore →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Which Calendar Style Fits Your Planning?
        </h2>
        <p className="mt-2 text-rose-800">
          Compare <strong>cute pastel</strong>,{" "}
          <strong>minimalist black-and-white</strong>, and{" "}
          <strong>academic</strong> layouts to match your routine.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-pink-200 bg-white">
          <table className="w-full text-sm text-rose-900">
            <thead className="bg-rose-50/60">
              <tr>
                <th className="p-3 text-left">Style</th>
                <th className="p-3 text-left">Best For</th>
                <th className="p-3 text-left">Features</th>
                <th className="p-3 text-left">Get It</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-medium">Cute Pastel</td>
                <td className="p-3">
                  Home planners, classrooms, gift calendars
                </td>
                <td className="p-3">
                  Soft colors, seasonal icons, high readability
                </td>
                <td className="p-3">
                  <a className="text-rose-700 underline" href="/">
                    View pack
                  </a>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Minimalist B&W</td>
                <td className="p-3">Office printing, ink-friendly bulk use</td>
                <td className="p-3">Clean grid, bold numbers, fast printing</td>
                <td className="p-3">
                  <a className="text-rose-700 underline" href="/">
                    View pack
                  </a>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Academic</td>
                <td className="p-3">
                  Students & teachers (Aug–Jul, term view)
                </td>
                <td className="p-3">
                  Semester blocks, assignment notes, term dates
                </td>
                <td className="p-3">
                  <a className="text-rose-700 underline" href="/">
                    View pack
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Regional & Format Options */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Monday Start, Sunday Start, and ISO Week Calendars
        </h2>
        <p className="mt-2 text-rose-800">
          Prefer <strong>Monday-start</strong> or <strong>Sunday-start</strong>?
          Need <strong>ISO week numbers</strong>? Choose the format that matches
          your region (<strong>US/UK/EU</strong>) and planning habits.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-rose-900">
          <li className="rounded-xl border border-pink-200 bg-white p-4">
            <strong>Monday-Start (EU/UK)</strong> aligns workweeks M–F.
            <a
              className="ml-1 text-rose-700 underline"
              href="/calendars/monthly/monday-start"
            >
              Browse
            </a>
          </li>
          <li className="rounded-xl border border-pink-200 bg-white p-4">
            <strong>Sunday-Start (US)</strong> traditional wall calendar style.
            <a
              className="ml-1 text-rose-700 underline"
              href="/calendars/monthly/sunday-start"
            >
              Browse
            </a>
          </li>
          <li className="rounded-xl border border-pink-200 bg-white p-4">
            <strong>ISO Week Numbers</strong> week 1 rules for project
            timelines.
            <a
              className="ml-1 text-rose-700 underline"
              href="/calendars/yearly/iso-weeks"
            >
              Browse
            </a>
          </li>
        </ul>
        <div className="mt-4 rounded-2xl border border-pink-200 bg-rose-50/60 p-4 text-sm text-rose-900">
          Tip: If your team uses ISO 8601, select Monday-start with week numbers
          for consistent sprint planning.
        </div>
      </section>

      {/* How-To: Print & Bind */}
      <section className="mx-auto max-w-6xl px-4 pb-12" id="how-to-print">
        <h2 className="text-2xl font-bold text-rose-900">
          How to Print & Bind Your Calendar
        </h2>
        <ol className="mt-3 list-inside list-decimal space-y-2 text-rose-900">
          <li>
            Download the <strong>PDF</strong> template sized for{" "}
            <strong>US Letter</strong> or <strong>A4</strong>.
          </li>
          <li>
            In your print dialog, choose <em>Fit to printable area</em> and set
            quality to <em>High</em>.
          </li>
          <li>
            For black-and-white: pick the <em>Minimal</em> version to save ink.
          </li>
          <li>
            For wall use, print on thicker paper (90–120 gsm) for durability.
          </li>
          <li>
            Bind with a clipboard, binder rings, or a simple top-edge staple.
          </li>
        </ol>
        <p className="mt-3 text-sm text-rose-800">
          Optional: scale to <strong>50–70%</strong> for Half-Letter/A5 planners
          and trim borders for a snug fit.
        </p>
      </section>

      {/* Use-Case Recipes */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Planner Recipes for Real Life
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">
              Content Calendar (Creators & Small Biz)
            </h3>
            <ul className="mt-2 list-inside list-disc text-sm text-rose-800">
              <li>Yearly overview for launches</li>
              <li>Monthly calendar for posts</li>
              <li>Weekly task planner + checklist</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">
              Family Planner (Home & School)
            </h3>
            <ul className="mt-2 list-inside list-disc text-sm text-rose-800">
              <li>Monthly wall calendar with color-coded events</li>
              <li>Meal planner + grocery list</li>
              <li>Chore chart & allowance tracker</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">
              Academic Planning (Students)
            </h3>
            <ul className="mt-2 list-inside list-disc text-sm text-rose-800">
              <li>Academic monthly (Aug–Jul)</li>
              <li>Assignment & exam trackers</li>
              <li>Habit tracker for study streaks</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-rose-900">
              Wellness & Habits
            </h3>
            <ul className="mt-2 list-inside list-disc text-sm text-rose-800">
              <li>12-month habit dashboard</li>
              <li>Sleep, water, and steps mini-trackers</li>
              <li>Mood log with monthly reflection</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Month & Year Silo */}
      <section
        className="mx-auto max-w-6xl px-4 pb-12"
        aria-labelledby="month-year-silo"
      >
        <h2 id="month-year-silo" className="text-2xl font-bold text-rose-900">
          Find Calendars by Month & Year
        </h2>
        <p className="mt-2 text-rose-800">
          Quick links to the most requested dates.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          {[
            {
              y: "2025",
              m: ["January", "February", "March", "April", "May", "June"],
            },
            {
              y: "2025",
              m: [
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            },
            {
              y: "2026",
              m: ["January", "February", "March", "April", "May", "June"],
            },
            {
              y: "2026",
              m: [
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            },
          ].map((block, i) => (
            <div
              key={i}
              className="rounded-2xl border border-pink-200 bg-white p-4 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-rose-900">
                {block.y} Monthly
              </h3>
              <ul className="mt-2 space-y-1">
                {block.m.map((mm) => (
                  <li key={mm}>
                    <a className="text-rose-700 underline" href={`/`}>
                      {mm} {block.y}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Paper Sizes & Print Settings (US Letter, A4, A5, Half-Letter) */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Paper Sizes, Margins, and Print Settings
        </h2>
        <p className="mt-2 text-rose-800">
          Get crisp, accurate prints for every{" "}
          <strong>printable calendar</strong> format. Optimize{" "}
          <strong>US Letter</strong>, <strong>A4</strong>, <strong>A5</strong>,
          and <strong>Half-Letter</strong> with border-aware layouts,
          ink-friendly colors, and clean margins that prevent cut-offs.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>
            <strong>US Letter (8.5×11)</strong>: best for home and school
            planners with wide writing space.
          </li>
          <li>
            <strong>A4 (210×297 mm)</strong>: standard office printouts and
            binders in EU/UK regions.
          </li>
          <li>
            <strong>Half-Letter / A5</strong>: compact planners, menu boards,
            and portable clipboards.
          </li>
          <li>
            <strong>Recommended margins</strong>: 0.25–0.5 in (6–12 mm) to
            protect headers and footers.
          </li>
          <li>
            <strong>Ink saving</strong>: minimalist grids, high-contrast lines,
            and pastel accents only where needed.
          </li>
        </ul>
      </section>

      {/* Academic & School Calendars (semester, term dates, exam blocks) */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Academic Calendars for Students and Teachers
        </h2>
        <p className="mt-2 text-rose-800">
          Plan by term with <strong>semester calendars</strong>,{" "}
          <strong>assignment trackers</strong>, and{" "}
          <strong>exam week blocks</strong>. Academic layouts follow
          <strong> August–July</strong> cycles, show{" "}
          <strong>week numbers</strong>, and reserve space for{" "}
          <strong>syllabus notes</strong>, <strong>reading lists</strong>, and{" "}
          <strong>grade goals</strong>.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>
            Weekly study plans with time blocks for classes, labs, and review
            sessions.
          </li>
          <li>
            Course overview pages for due dates, office hours, and milestones.
          </li>
          <li>
            Group project timelines and presentation schedules with checkpoints.
          </li>
          <li>
            Academic habit trackers for focus, vocabulary, and revision streaks.
          </li>
        </ul>
      </section>

      {/* Family, Home, and Chore Planning */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Family Calendars and Home Planning
        </h2>
        <p className="mt-2 text-rose-800">
          Keep everyone aligned with a <strong>family wall calendar</strong>{" "}
          that organizes school events, appointments, sports, errands, and
          chores. Color-coded boxes and monthly dashboards simplify busy weeks.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>Kids’ activity rows, music lessons, and practice logs.</li>
          <li>Meal plan and grocery day stacked on the same week view.</li>
          <li>Bill tracker with due dates, subscriptions, and renewals.</li>
          <li>Seasonal cleaning, pet care, and holiday prep checklists.</li>
        </ul>
      </section>

      {/* Wellness, Habit, and Self-Care Trackers */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Wellness Calendars and Habit Trackers
        </h2>
        <p className="mt-2 text-rose-800">
          Build consistent routines with{" "}
          <strong>monthly habit calendars</strong> and{" "}
          <strong>wellness dashboards</strong>. Visual streaks encourage daily
          wins across fitness, hydration, sleep, mindfulness, and study habits.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>12-month habit grid for daily checkmarks and milestone notes.</li>
          <li>Weekly reflections and mood logging with simple scales.</li>
          <li>
            Step counts, workout splits, and recovery days in one timeline.
          </li>
          <li>Focus timers, deep-work blocks, and distraction audits.</li>
        </ul>
      </section>

      {/* Content, Social, and Editorial Calendars */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Content, Social, and Editorial Calendars
        </h2>
        <p className="mt-2 text-rose-800">
          Coordinate posts, promotions, and launches with a clear{" "}
          <strong>content calendar</strong>. Monthly and weekly boards track
          ideas, drafts, approvals, and publishing windows for blogs, video, and
          social updates.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>Post title, channel, asset checklist, and caption space.</li>
          <li>Campaign timelines with start/end dates and key deliverables.</li>
          <li>Evergreen post rotation, seasonal themes, and hashtag notes.</li>
          <li>
            Performance review boxes for reach, saves, and click-throughs.
          </li>
        </ul>
      </section>

      {/* Project & Work Schedules (sprints, ISO weeks, roadmaps) */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Project Calendars and Work Sprints
        </h2>
        <p className="mt-2 text-rose-800">
          Manage <strong>roadmaps</strong>, <strong>sprint cycles</strong>, and{" "}
          <strong>deadlines</strong> with simple visual calendars. ISO week
          numbering, milestone markers, and retrospective notes help teams track
          progress at a glance.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>Two-week sprints with capacity notes and carry-over items.</li>
          <li>Quarterly roadmap with release windows and freeze periods.</li>
          <li>Task priority flags and blocked-by indicators.</li>
          <li>Monthly retrospective prompts and action items.</li>
        </ul>
      </section>

      {/* Seasonal, Holiday, and Event Planning */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Seasonal, Holiday, and Event Calendars
        </h2>
        <p className="mt-2 text-rose-800">
          Plan festive months with <strong>holiday calendars</strong> and{" "}
          <strong>seasonal to-dos</strong>. Track decorating days, gift lists,
          travel windows, party menus, and guest RSVPs on one page.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>Winter celebrations, cookie bakes, and photo sessions.</li>
          <li>Spring cleaning, garden starts, and school concerts.</li>
          <li>Summer trips, camps, and outdoor parties.</li>
          <li>Autumn harvest, costumes, and family gatherings.</li>
        </ul>
      </section>

      {/* Gardening, Moon Phases, and Outdoor Planning */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Gardening and Moon Phase Calendars
        </h2>
        <p className="mt-2 text-rose-800">
          Align <strong>planting schedules</strong>,{" "}
          <strong>harvest dates</strong>, and <strong>moon phases</strong> for
          backyard gardens and outdoor hobbies. Month-by-month boxes support
          frost dates, watering cycles, and pruning notes.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>Seed starting timelines and transplant reminders.</li>
          <li>New moon and full moon markers for night sky watchers.</li>
          <li>Compost turns, fertilizer cycles, and pest checks.</li>
          <li>Seasonal tool maintenance and storage reminders.</li>
        </ul>
      </section>

      {/* Accessibility & Readability (fonts, contrast, color-blind safety) */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Accessible, Readable, and Ink-Friendly Calendars
        </h2>
        <p className="mt-2 text-rose-800">
          Designed for clarity with <strong>high-contrast text</strong>,{" "}
          <strong>large date cells</strong>, and{" "}
          <strong>clean grid lines</strong>. Minimal color dependence supports
          color-blind users and eliminates visual clutter.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>Readable type scale for headers, weekdays, and notes.</li>
          <li>Sufficient line weight for reliable photocopies and scans.</li>
          <li>Motion-free layouts and steady visual rhythm.</li>
          <li>Optional pastel accents that keep the page ink-savvy.</li>
        </ul>
      </section>

      {/* Troubleshooting: Print Quality, Scaling, and Alignment */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Printing Troubleshooting and Alignment Tips
        </h2>
        <p className="mt-2 text-rose-800">
          Solve common issues like clipped edges, faded lines, or misaligned
          borders. Reliable calendars begin with the right printer settings and
          paper choice.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>
            Use “Fit to printable area” and disable custom headers/footers in
            the dialog.
          </li>
          <li>
            Set print quality to High and select the correct paper type for
            sharper lines.
          </li>
          <li>Check duplex margins to keep front/back pages aligned.</li>
          <li>
            If grayscale looks dull, increase contrast and line weight in the
            settings.
          </li>
        </ul>
      </section>

      {/* Planner Methods: Time-Blocking, Pomodoro, and Theming */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Planner Methods: Time-Blocking, Pomodoro, and Theme Days
        </h2>
        <p className="mt-2 text-rose-800">
          Pair your calendar with proven methods for focus and follow-through.
          Visual blocks turn tasks into steady progress.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>
            <strong>Time-blocking</strong> for deep work and meetings without
            overlap.
          </li>
          <li>
            <strong>Pomodoro cycles</strong> with short breaks and end-of-day
            review.
          </li>
          <li>
            <strong>Theme days</strong> for batching: admin, errands, study, or
            creative work.
          </li>
          <li>
            <strong>Weekly preview</strong> to prioritize, then a{" "}
            <strong>Friday retro</strong> to improve next week.
          </li>
        </ul>
      </section>

      {/* Minimalist vs Cute Pastel (style keywords without external links) */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-rose-900">
          Minimalist vs Cute Pastel Calendars
        </h2>
        <p className="mt-2 text-rose-800">
          Choose a style that fits your space.{" "}
          <strong>Minimalist black-and-white</strong> saves ink and suits
          offices, while
          <strong> cute pastel calendars</strong> bring soft color and friendly
          icons to family walls and classrooms.
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-rose-900">
          <li>Bold date numbers for quick scanning.</li>
          <li>Holiday highlights and seasonal headers.</li>
          <li>Extra note lines for reminders and mini-goals.</li>
          <li>Consistent grid rhythm for tidy handwriting.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-rose-900">FAQ</h2>
        <div className="mt-6 divide-y divide-pink-200 rounded-2xl border border-pink-200 bg-white shadow-sm">
          {[
            {
              q: "Are the calendars free to download?",
              a: "Yes, personal-use PDFs are free. Look for the download button on each template page.",
            },
            {
              q: "Will you add 2026+ calendars?",
              a: "Absolutely! We publish new dated sets yearly and keep undated options for flexible planning.",
            },
            {
              q: "Do you offer minimalist black-and-white?",
              a: "Yes. Our ink-friendly minimalist series is perfect for clean planners and office printing.",
            },
            {
              q: "Can I request a theme?",
              a: "We love requests! Send your idea and we’ll try to include it in an upcoming drop.",
            },
          ].map((f) => (
            <details key={f.q} className="group open:bg-pink-50">
              <summary className="cursor-pointer list-none px-5 py-4 font-medium text-rose-900">
                {f.q}
              </summary>
              <div className="px-5 pb-5 text-rose-800">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-200 bg-pink-100/60">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-rose-800">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} I Love Calendars</div>
            <div className="text-rose-700">
              Made with cute templates & calm planning
            </div>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Print and Bind a Printable Calendar",
            description:
              "Step-by-step instructions to print and bind calendars at home.",
            supply: [
              {
                "@type": "HowToSupply",
                name: "Printable calendar PDF (US Letter or A4)",
              },
              {
                "@type": "HowToSupply",
                name: "Printer paper (90–120 gsm for wall use)",
              },
              {
                "@type": "HowToSupply",
                name: "Binder rings, clipboard, or stapler",
              },
            ],
            tool: [{ "@type": "HowToTool", name: "Home printer" }],
            step: [
              {
                "@type": "HowToStep",
                name: "Download",
                text: "Download the PDF sized for US Letter or A4.",
              },
              {
                "@type": "HowToStep",
                name: "Print Settings",
                text: "Use Fit to printable area and High quality.",
              },
              {
                "@type": "HowToStep",
                name: "Ink Saving",
                text: "Select minimal black-and-white if needed.",
              },
              {
                "@type": "HowToStep",
                name: "Paper Choice",
                text: "Use thicker matte paper for wall calendars.",
              },
              {
                "@type": "HowToStep",
                name: "Binding",
                text: "Bind with a clipboard, binder rings, or staple.",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://ilovecalendars.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Calendars",
                    item: "https://ilovecalendars.com/calendars",
                  },
                ],
              },
              {
                "@type": "SiteNavigationElement",
                name: "Primary Navigation",
                url: "https://ilovecalendars.com/",
                about: "Printable calendars and planners",
                hasPart: [
                  {
                    "@type": "WebPage",
                    name: "Monthly Calendars",
                    url: "https://ilovecalendars.com/calendars/monthly",
                  },
                  {
                    "@type": "WebPage",
                    name: "Yearly Calendars",
                    url: "https://ilovecalendars.com/calendars/yearly",
                  },
                  {
                    "@type": "WebPage",
                    name: "Academic Calendars",
                    url: "https://ilovecalendars.com/calendars/academic",
                  },
                  {
                    "@type": "WebPage",
                    name: "Weekly Planners",
                    url: "https://ilovecalendars.com/planners/weekly",
                  },
                  {
                    "@type": "WebPage",
                    name: "Habit Trackers",
                    url: "https://ilovecalendars.com/trackers/habit",
                  },
                  {
                    "@type": "WebPage",
                    name: "Holiday Packs",
                    url: "https://ilovecalendars.com/calendars/holiday",
                  },
                ],
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Table",
            name: "Calendar Style Comparison",
            description:
              "Compare cute pastel, minimalist black-and-white, and academic calendar styles for planners.",
            about: "Printable calendar style comparison for planning routines.",
            tableSchema: {
              columns: [
                { name: "Style" },
                { name: "Best For" },
                { name: "Features" },
                { name: "Get It" },
              ],
            },
            rows: [
              {
                cells: [
                  "Cute Pastel",
                  "Home planners, classrooms, gift calendars",
                  "Soft colors, seasonal icons, high readability",
                  "https://ilovecalendars.com/calendars/monthly/2025-pastel",
                ],
              },
              {
                cells: [
                  "Minimalist B&W",
                  "Office printing, ink-friendly bulk use",
                  "Clean grid, bold numbers, fast printing",
                  "https://ilovecalendars.com/calendars/monthly/undated-minimal",
                ],
              },
              {
                cells: [
                  "Academic",
                  "Students & teachers (Aug–Jul, term view)",
                  "Semester blocks, assignment notes, term dates",
                  "https://ilovecalendars.com/calendars/academic",
                ],
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Featured Printable Calendars & Planners",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                url: "https://ilovecalendars.com/calendars/monthly/2025-pastel",
                name: "2025 Monthly Calendar (Pastel)",
              },
              {
                "@type": "ListItem",
                position: 2,
                url: "https://ilovecalendars.com/calendars/monthly/undated-minimal",
                name: "Undated Monthly (Minimal)",
              },
              {
                "@type": "ListItem",
                position: 3,
                url: "https://ilovecalendars.com/planners/weekly/horizontal",
                name: "Weekly Planner (Horizontal)",
              },
              {
                "@type": "ListItem",
                position: 4,
                url: "https://ilovecalendars.com/trackers/habit/30-day",
                name: "30-Day Habit Tracker",
              },
              {
                "@type": "ListItem",
                position: 5,
                url: "https://ilovecalendars.com/trackers/habit/12-month",
                name: "12-Month Habit Dashboard",
              },
              {
                "@type": "ListItem",
                position: 6,
                url: "https://ilovecalendars.com/trackers/budget/monthly",
                name: "Monthly Budget Planner",
              },
              {
                "@type": "ListItem",
                position: 7,
                url: "https://ilovecalendars.com/planners/meal/weekly",
                name: "Weekly Meal Planner + Grocery List",
              },
              {
                "@type": "ListItem",
                position: 8,
                url: "https://ilovecalendars.com/calendars/holiday/2025",
                name: "2025 Holiday Calendar Pack",
              },
              {
                "@type": "ListItem",
                position: 9,
                url: "https://ilovecalendars.com/planners/study/student-kit",
                name: "Student Planner Kit",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
