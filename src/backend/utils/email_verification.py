import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from src.backend.config import Config


def send_verification_email(email):
    sender_email = Config().VERIFICATION_EMAIL
    receiver_email = email
    password = Config().PASSWORD_VERIFICATION_EMAIL

    message = MIMEMultipart("alternative")
    message["Subject"] = "Please Verify Your Email"
    message["From"] = sender_email
    message["To"] = receiver_email

    text = """\
    Hi,
    Please click on the link below to verify your email address:
    http://yourdomain.com/verify-email?email={email}
    """.format(email=email)

    html = """\
    <html>
      <body>
        <p>Hi,<br>
           Please click on the link below to verify your email address:<br>
           <a href="http://yourdomain.com/verify-email?email={email}">Verify Email</a>
        </p>
      </body>
    </html>
    """.format(email=email)

    part1 = MIMEText(text, "plain")
    part2 = MIMEText(html, "html")

    message.attach(part1)
    message.attach(part2)

    try:
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server.login(sender_email, password)
        server.sendmail(
            sender_email, receiver_email, message.as_string()
        )
        server.close()
    except Exception as e:
        print(f"Error sending email: {e}")
