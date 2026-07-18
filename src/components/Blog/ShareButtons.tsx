import {
  Facebook,
  Twitter,
  Link2,
  MessageCircle,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const url = window.location.href;

  const share = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,

    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,

whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,  };

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-wrap gap-4">

      {/* Facebook */}

      <a
        href={share.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-3 text-white transition hover:scale-105"
      >
        <Facebook size={18} />
        Facebook
      </a>

      {/* X / Twitter */}

      <a
        href={share.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white transition hover:scale-105"
      >
        <Twitter size={18} />
        X
      </a>

      {/* WhatsApp */}

      <a
        href={share.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white transition hover:scale-105"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>

      {/* Copy */}

      <button
        onClick={copyLink}
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-white transition hover:scale-105"
      >
        {copied ? (
          <>
            <Check size={18} />
            Copied
          </>
        ) : (
          <>
            <Link2 size={18} />
            Copy Link
          </>
        )}
      </button>
    </div>
  );
}