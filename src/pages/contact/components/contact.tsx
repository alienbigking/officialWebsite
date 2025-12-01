import React from 'react'
import { Form, Input, Button, message, Row, Col } from 'antd'
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import styles from './contact.less'

const { TextArea } = Input

const contactInfo = [
  {
    icon: <EnvironmentOutlined />,
    title: 'Buttonwood, California.',
    text: 'Rosemead, CA 91770'
  },
  {
    icon: <PhoneOutlined />,
    title: '+1 253 565 2365',
    text: 'Mon to Fri 9am to 6pm'
  },
  {
    icon: <MailOutlined />,
    title: 'support@colorlib.com',
    text: 'Send us your query anytime!'
  }
]

const Contact: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: Record<string, string>) => {
    console.log('Form values:', values)
    message.success('Message sent successfully!')
    form.resetFields()
  }

  return (
    <main className={styles.contact}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Explore</p>
          <h1 className={styles.heroTitle}>Contact Me</h1>
        </div>
      </div>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.mapWrapper}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531565!3d-37.81627974202161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778d2f8f0f2c1!2sVictoria%20Harbour!5e0!3m2!1sen!2sau!4v1706220000000!5m2!1sen!2sau"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <h2 className={styles.sectionTitle}>Get in Touch</h2>

          <Row gutter={[32, 32]}>
            <Col xs={24} lg={16}>
              <div className={styles.formWrapper}>
                <Form form={form} onFinish={onFinish} layout="vertical" className={styles.contactForm}>
                  <Form.Item
                    name="message"
                    rules={[{ required: true, message: 'Please enter your message' }]}
                  >
                    <TextArea rows={6} placeholder="Enter Message" />
                  </Form.Item>

                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                      >
                        <Input placeholder="Enter your name" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="email"
                        rules={[
                          { required: true, message: 'Please enter your email' },
                          { type: 'email', message: 'Please enter a valid email' }
                        ]}
                      >
                        <Input placeholder="Enter email address" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="subject"
                    rules={[{ required: true, message: 'Please enter subject' }]}
                  >
                    <Input placeholder="Enter Subject" />
                  </Form.Item>

                  <Form.Item className={styles.submitWrapper}>
                    <Button type="primary" htmlType="submit" size="large">
                      Send
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>

            <Col xs={24} lg={8}>
              <div className={styles.infoColumn}>
                {contactInfo.map((info) => (
                  <div key={info.title} className={styles.infoItem}>
                    <span className={styles.infoIcon}>{info.icon}</span>
                    <div>
                      <h3>{info.title}</h3>
                      <p>{info.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  )
}

export default Contact
