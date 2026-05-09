import Link from "next/link";

const leftInfo = [
  {
    icon: "fa-regular fa-envelope",
    title: "Email",
    value: "dm.propertiees@gmail.com",
    href: "mailto:dm.propertiees@gmail.com",
  },
  {
    icon: "fa-solid fa-phone-volume",
    title: "Phone",
    value: "+91 6383154985",
    href: "tel:+916383154985",
  },
  {
    icon: "fa-regular fa-clock",
    title: "Time",
    value: "Mon - Fri (08AM - 10PM)",
  },
];

const socialLinks = [
  { icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com/" },
  { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/_dmconstruction_" },
  { icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/" },
];

export default function TopBar() {
  return (
    <div className="bg-[var(--secondary-color)] text-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2">
        <ul className="hidden items-center gap-8 lg:flex">
          {leftInfo.map((item) => (
            <li key={item.title} className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/45 text-[13px]">
                <i className={item.icon} />
              </span>
              <div className="leading-tight">
                <p className="text-[14px] font-semibold">{item.title}</p>
                <p className="text-[13px] text-white/85">
                  {item.href ? (
                    <a href={item.href} className="transition hover:text-[var(--primary-color)]">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden h-12 items-center bg-[var(--primary-color)] px-8 lg:flex [clip-path:polygon(6%_0,100%_0,94%_100%,0_100%)]">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-medium">Follow Us:</span>
            <ul className="flex items-center gap-2">
              {socialLinks.map((item) => (
                <li key={item.icon}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/55 text-[12px] transition hover:bg-white hover:text-[var(--primary-color)]"
                  >
                    <i className={item.icon} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
