// Design reminder: quizzes reduce sales friction through clarity; keep them short, privacy-aware, and visually tied to the product accent.
import { ArrowRight, Clock3, LockKeyhole } from "lucide-react";
import { Link } from "wouter";
import type { Product } from "@/data/site";

export default function QuizCTA({ product }: { product: Product }) {
  return (
    <section className="quiz-section" id="product-fit" style={{ "--product": product.accent, "--product-tint": product.tint } as React.CSSProperties}>
      <div className="container quiz-layout">
        <div className="quiz-copy">
          <span className="eyebrow">Product fit check</span>
          <h2>{product.quizTitle}</h2>
          <p>{product.quizIntro}</p>
          <div className="quiz-meta"><span><Clock3 size={16} /> About 2 minutes</span><span><LockKeyhole size={16} /> No sensitive information</span></div>
        </div>
        <div className="wufoo-stage" aria-label={`${product.name} quiz preview`}>
          <div className="wufoo-stage__top"><span>Wufoo-ready quiz area</span><strong>{product.shortName}</strong></div>
          <div className="quiz-preview-row"><span>01</span><p>What best describes your organisation?</p></div>
          <div className="quiz-preview-row"><span>02</span><p>Where is the greatest operational pressure?</p></div>
          <div className="quiz-preview-row"><span>03</span><p>What would a useful next step look like?</p></div>
          <div className="wufoo-stage__footer">
            <small>Embed destination ready when your Wufoo URL is supplied.</small>
            <Link href={`/book-demo?product=${product.key}`} className="button button--dark">Schedule a call <ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

