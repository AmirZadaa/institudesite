import { Html, Head, Body, Container, Heading, Text, Img, Preview } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'


export const GenerateEmailBody = ({ name, eventTitle, eventDate, startTime, endTime}) => {
  
  return (
    <Html>
      <Head />
      <Preview>Event Registration Confirmation This is latest</Preview>
      <Body
        style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6', padding: '20px' }}
      >
        <Container
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        >
          {/* <Img src={`${host}/logo.png`} alt="Event Logo" width="200" style={{ margin: '0 auto' }} /> */}
          <Heading>Hello, {name}</Heading>
          <Text>
            Thank you for registering for the event: <strong>{eventTitle}</strong>
          </Text>
          <Text>
            📅 <strong>Date:</strong> {eventDate}
          </Text>
          <Text>
            <strong>⏰ Time:</strong> {startTime} {endTime ? `- ${endTime}` : ''} IST
          </Text>
          <Text>We look forward to seeing you!</Text>
        </Container>
      </Body>
    </Html>
  )
}
