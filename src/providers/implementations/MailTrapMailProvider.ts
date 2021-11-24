import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";

class MailTrapMailProvider implements IMailProvider{

  private transporter;
  
  constructor(){
    this.transporter = nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "d1bf55f33c1210",
            pass: "2a471128acea71",
          }
    })
  }

  async sendMail(message: IMessage):Promise<void>{
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
        subject: message.subject,
        html: message.body
    })

  }
}

export { MailTrapMailProvider };