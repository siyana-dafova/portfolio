import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

const Contact = () => {
  const email = socials.find((social) => social.id === "email");
  const otherSocials = socials.filter((social) => social.id !== "email");
  const EmailIcon = email?.icon;

  return (
    <Section id="contact">
      <div className="flex w-full flex-col items-start gap-8">
        <SectionTitle>Contact</SectionTitle>

        <p className="max-w-xl text-muted">
          I&apos;m currently open to new opportunities and collaborations. If
          you&apos;d like to work together, the fastest way to reach me is by
          email.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {email && EmailIcon && (
            <Button href={email.href} size="lg">
              <EmailIcon className="mr-2 h-4 w-4" aria-hidden />
              {profile.email}
            </Button>
          )}

          {otherSocials.map((social) => {
            const SocialIcon = social.icon;

            return (
              <Button
                key={social.id}
                href={social.href}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon className="mr-2 h-4 w-4" aria-hidden />
                {social.label}
              </Button>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
