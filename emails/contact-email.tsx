import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface ContactEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
    company?: string; // Honeypot field for spam prevention
}

export function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>New portfolio contact from {name}</Preview>

      <Body
        style={{
          backgroundColor: "#f6f9fc",
          fontFamily:
            "Arial, Helvetica, sans-serif",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            margin: "40px auto",
            padding: "40px",
            borderRadius: "12px",
            maxWidth: "650px",
            border: "1px solid #e5e7eb",
          }}
        >
          <Heading
            style={{
              color: "#111827",
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            New Portfolio Contact
          </Heading>

          <Text>
            Someone has sent you a message from your portfolio website.
          </Text>

          <Hr />

          <Section>
            <Text>
              <strong>Name</strong>
            </Text>

            <Text>{name}</Text>
          </Section>

          <Section>
            <Text>
              <strong>Email</strong>
            </Text>

            <Text>{email}</Text>
          </Section>

          <Section>
            <Text>
              <strong>Subject</strong>
            </Text>

            <Text>{subject}</Text>
          </Section>

          <Section>
            <Text>
              <strong>Message</strong>
            </Text>

            <Text
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: "1.7",
              }}
            >
              {message}
            </Text>
          </Section>

          <Hr />

          <Text
            style={{
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            This email was sent from your portfolio contact form.
          </Text>

          <Text
            style={{
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Portfolio Owner: <strong>Mya Htut Khaung</strong>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}