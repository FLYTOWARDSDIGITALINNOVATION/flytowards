import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import RetailPageSections from './RetailPageSections';

export default function Retail() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Point of Sale Systems for Retail in Tamil Nadu | FlyTowards';
        return () => { document.title = 'FlyTowards | Digital Innovation'; };
    }, []);

    return (
        <main className="retail-page">
            <div className="mesh-bg" />
            <section className="retail-hero">
                <div className="retail-hero-copy">
                    <span className="retail-kicker"><ShoppingBag size={16} /> Retail POS &amp; Management Software</span>
                    <h1>Point of Sale Systems for Retail Businesses in Tamil Nadu</h1>
                    <h2>Connect Retail Billing, Inventory and Store Operations</h2>
                    <p>Retail businesses manage daily transactions, product information, stock movements, purchases and customer-related activities.</p>
                    <p>When billing and inventory records are maintained through separate applications or manual processes, store owners and managers may find it difficult to maintain consistent operational information.</p>
                    <p>FlyTowards provides retail software development solutions for shops, retail chains and trading businesses across Tamil Nadu, with a focus on South Tamil Nadu. We help businesses plan custom point of sale systems for retail, inventory management applications, billing workflows and connected retail management software.</p>
                    <p>Whether you operate a single retail shop or manage multiple store locations, we focus on software requirements that reflect your sales and inventory processes.</p>
                    <div className="retail-hero-actions">
                        <Link to="/contact" className="retail-hero-primary">Discuss Your Retail POS Project <ArrowRight size={18} /></Link>
                        <Link to="/service" className="retail-hero-secondary">Explore Our Software Services</Link>
                    </div>
                </div>
                <div className="retail-hero-visual">
                    <div className="retail-pos-window">
                        <div className="retail-pos-top"><span><i /> FlyTowards POS</span><small>STORE 01&nbsp; · &nbsp;REGISTER 02</small></div>
                        <div className="retail-pos-content">
                            <div className="retail-pos-products"><div className="retail-pos-heading"><b>Product catalog</b><span>⌕ &nbsp; Search products</span></div><div className="retail-pos-product"><i>☕</i><span><b>Arabica Coffee</b><small>SKU 1048 · In stock</small></span><strong>₹420</strong></div><div className="retail-pos-product"><i>🛍</i><span><b>Cotton Tote Bag</b><small>SKU 2186 · In stock</small></span><strong>₹280</strong></div><div className="retail-pos-product"><i>📦</i><span><b>Gift Box Set</b><small>SKU 3092 · Low stock</small></span><strong>₹650</strong></div></div>
                            <div className="retail-pos-checkout"><b>Current sale</b><div><span>3 items</span><strong>₹1,350</strong></div><div><span>Tax</span><strong>₹162</strong></div><div className="retail-pos-total"><span>Total</span><strong>₹1,512</strong></div><button type="button">Complete payment <ArrowRight size={14}/></button><small>Payment status&nbsp; <b>Ready</b></small></div>
                        </div>
                        <div className="retail-pos-bottom"><span>Today&apos;s sales <b>₹48,620</b></span><span>Transactions <b>186</b></span><span>Inventory <b>On track</b></span></div>
                    </div>
                    <div className="retail-hero-note"><span>●</span> Sales and stock information, together</div>
                </div>
            </section>
            <RetailPageSections />
        </main>
    );
}
