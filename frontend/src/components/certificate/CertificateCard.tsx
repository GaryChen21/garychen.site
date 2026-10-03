import { TbExternalLink } from "react-icons/tb";

export interface Certificate {
  title: string;
  image: string;
  link: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  variant?: "grid" | "slider";
}

export const CertificateCard = ({ certificate, variant = "grid" }: CertificateCardProps) => {
  const isSlider = variant === "slider";

  return (
    <div
      className={`group flex h-full w-full flex-col overflow-hidden rounded-3xl border ${
        isSlider
          ? "border-neutral-300/10 bg-neutral-900 shadow-xl dark:border-neutral-700/30"
          : "border-neutral-300/60 bg-white shadow-md ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-500/15 dark:border-neutral-800 dark:bg-neutral-900 dark:ring-white/5 dark:hover:shadow-black/40"
      }`}
    >
      <div className="relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <img
          src={certificate.image}
          alt={certificate.title}
          loading="lazy"
          className="w-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-between gap-4 p-5 sm:p-6">
        <h3
          className={`text-center text-base font-bold leading-snug sm:text-lg ${
            isSlider ? "text-white" : "text-neutral-900 dark:text-neutral-100"
          }`}
        >
          {certificate.title}
        </h3>

        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
        >
          <TbExternalLink className="h-4 w-4" />
          <span>View Certificate</span>
        </a>
      </div>
    </div>
  );
};
