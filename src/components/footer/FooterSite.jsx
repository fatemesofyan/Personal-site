import ContactInfo from "./detalist/contactInfo";
import FooterCopyright from "./detalist/footerCopyright";
import FooterLinks from "./detalist/footerLinks";
import SocialLinks from "./detalist/socialLinks";
import SubscribeForm from "./detalist/subscribeForm";

export default function FooterSite() {
  return (
    <div
      className="relative w-full bg-cover bg-top"
      style={{ backgroundImage: "url('/image/backgroundFooter.png')" }}
    >
      <SocialLinks />

      <div className="flex flex-col md:flex-row mt-5 mb-10 gap-10 px-5 md:px-10">
        <ContactInfo />
        <FooterLinks />
        <SubscribeForm />
      </div>

      <FooterCopyright />
    </div>
  );
}
