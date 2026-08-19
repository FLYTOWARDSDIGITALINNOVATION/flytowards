import React from 'react';

const ProfileCard = ({ image }) => {
    const imageSrc = image || '/sanjay.png';

    return (
        <div className="ft-profile-page" role="region" aria-label="Profile">
            <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

.ft-profile-page {
    background: transparent;
    padding: 48px 0;
}

.ft-profile-shell {
    width: 100%;
    max-width: none;
    margin: 0;
}

.ft-profile-card {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 0;
    overflow: visible;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow: none;
    padding-bottom: 3.5rem;
    animation: ftProfileFadeUp 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

@keyframes ftProfileFadeUp {
    from {
        opacity: 0;
        transform: translateY(14px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (prefers-reduced-motion: reduce) {
    .ft-profile-card { animation: none; }
}

@media (min-width: 480px) {
    .ft-profile-card { grid-template-columns: 42% 58%; }
}

@media (min-width: 768px) {
    .ft-profile-card { grid-template-columns: 45% 55%; }
}

.ft-profile-left {
    position: relative;
    min-height: 420px;
    background: transparent;
    border-radius: 24px;
    overflow: hidden;
}

.ft-profile-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
}

.ft-profile-leftGradient {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 44%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0) 70%);
    pointer-events: none;
}

.ft-profile-pill {
    position: absolute;
    left: 18px;
    bottom: 18px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.86);
    border: 1px solid rgba(240, 236, 228, 0.9);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.02em;
    color: #1a1a1a;
}

.ft-profile-pillDot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #1a1a1a;
    box-shadow: 0 0 0 2px rgba(26, 26, 26, 0.1);
}

.ft-profile-right {
    position: relative;
    background: #ffffff;
    padding: 20px 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #1a1a1a;
    text-align: center;
}

@media (min-width: 480px) {
    .ft-profile-right { padding: 26px 22px; }
}

@media (min-width: 768px) {
    .ft-profile-right { padding: 34px 32px; }
}

.ft-profile-label {
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 12px;
    font-weight: 700;
    color: #b0a090;
    margin-bottom: 16px;
}

.ft-profile-quoteMark {
    position: absolute;
    top: 10px;
    right: 16px;
    font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif;
    font-size: 140px;
    line-height: 1;
    opacity: 0.08;
    color: #1a1a1a;
    pointer-events: none;
    user-select: none;
}

.ft-profile-quote {
    font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif;
    font-style: italic;
    font-size: clamp(16px, 2.8vw, 22px);
    line-height: 1.65;
    margin: 0 auto 22px auto;
    align-self: center;
    max-width: 34ch;
}

.ft-profile-rule {
    width: 40px;
    height: 3px;
    background: #000000;
    border-radius: 999px;
    margin: 0 auto 18px auto;
    align-self: center;
}

.ft-profile-name {
    font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif;
    font-weight: 700;
    font-size: clamp(16px, 2.5vw, 22px);
    margin: 0 0 8px 0;
}

.ft-profile-role {
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 12px;
    font-weight: 700;
    color: #999;
    margin: 0 0 22px 0;
}

.ft-profile-brandRow {
    margin-top: auto;
    padding-top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border-top: 1px solid #f0ece4;
}

.ft-profile-brandLogo {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    background: #000;
    display: grid;
    place-items: center;
    color: #fff;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-weight: 800;
    font-size: 14px;
}

.ft-profile-brandText {
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #1a1a1a;
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
}

.ft-profile-brandText span + span {
    color: #999;
    font-weight: 600;
}

.ft-profile-brandSlash {
    color: #b0a090;
    font-weight: 700;
}
            `}</style>

            <div className="ft-profile-shell">
                <div className="ft-profile-card" role="article">
                    <div className="ft-profile-left">
                        <img className="ft-profile-image" src={imageSrc} alt="Mr. Sanjay Kumar" />
                        <div className="ft-profile-leftGradient" />
                        <div className="ft-profile-pill">
                            <span className="ft-profile-pillDot" aria-hidden="true" />
                            <span>Fly Towards</span>
                        </div>
                    </div>

                    <div className="ft-profile-right">
                        <div className="ft-profile-label">Vision &amp; Leadership</div>
                        <div className="ft-profile-quoteMark" aria-hidden="true">"</div>
                        <p className="ft-profile-quote">
                            {'"Every brand has a story — we\u2019re here to make it reach the world.'}
                            <br />
                            {'At Fly Towards, we make that happen through Innovation, strategy and commitment."'}
                        </p>
                        <div className="ft-profile-rule" aria-hidden="true" />
                        <div className="ft-profile-name">Mr. Sanjay Kumar</div>
                        <div className="ft-profile-role">Founder &amp; CEO</div>

                        <div className="ft-profile-brandRow">
                            <div className="ft-profile-brandLogo" aria-hidden="true">R</div>
                            <div className="ft-profile-brandText" aria-label="Fly Towards / Digital Innovation">
                                <span>Fly Towards</span>
                                <span className="ft-profile-brandSlash" aria-hidden="true">/</span>
                                <span>Digital Innovation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
