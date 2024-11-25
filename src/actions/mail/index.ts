"use server";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import nodemailer from "nodemailer";

// Dummy data for customers
const dummyCustomers = {
  subscription: {
    credits: 100,
    plan: "Premium",
  },
  domains: [
    {
      customer: [
        {
          id: "cust1",
          email: "customer1@example.com",
          Domain: {
            name: "example.com",
          },
        },
        {
          id: "cust2",
          email: "customer2@example.com",
          Domain: {
            name: "anotherdomain.com",
          },
        },
      ],
    },
  ],
};

// Dummy data for campaigns
const dummyCampaigns = {
  campaign: [
    {
      id: "campaign1",
      name: "Welcome Campaign",
      customers: ["customer1@example.com", "customer2@example.com"],
      createdAt: new Date(),
    },
  ],
};

// Function to get all customers (using dummy data)
export const onGetAllCustomers = async () => {
  try {
    return dummyCustomers;
  } catch (error) {
    console.log(error);
  }
};

// Function to get all campaigns (using dummy data)
export const onGetAllCampaigns = async () => {
  try {
    return dummyCampaigns;
  } catch (error) {
    console.log(error);
  }
};

// Function to create a marketing campaign (no database, just a placeholder)
export const onCreateMarketingCampaign = async (name: string) => {
  try {
    console.log(`Campaign ${name} created!`);
    return { status: 200, message: "Your campaign was created" };
  } catch (error) {
    console.log(error);
  }
};

// Function to save an email template (no database, just a placeholder)
export const onSaveEmailTemplate = async (
  template: string,
  campaignId: string
) => {
  try {
    console.log(`Template saved for campaign ${campaignId}:`, template);
    return { status: 200, message: "Email template created" };
  } catch (error) {
    console.log(error);
  }
};

// Function to add customers to email (no database, just a placeholder)
export const onAddCustomersToEmail = async (
  customers: string[],
  id: string
) => {
  try {
    console.log(`Customers added to campaign ${id}:`, customers);
    return { status: 200, message: "Customers added to campaign" };
  } catch (error) {
    console.log(error);
  }
};

// Function to bulk send emails (using dummy SMTP settings)
export const onBulkMailer = async (email: string[], campaignId: string) => {
  try {
    // Dummy template for the campaign
    const template = {
      name: "Dummy Campaign",
      template: JSON.stringify({ content: "Hello, this is a test email." }),
    };

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      to: email,
      subject: template.name,
      text: JSON.parse(template.template).content,
    };

    transporter.sendMail(
      mailOptions,
      function (error: unknown, info: { response: string }) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );

    console.log(`${email.length} emails sent for campaign ${campaignId}`);
    return { status: 200, message: "Campaign emails sent" };
  } catch (error) {
    console.log(error);
  }
};

// Function to get customer responses (no database, just a placeholder)
export const onGetAllCustomerResponses = async (id: string) => {
  try {
    console.log(`Fetching responses for customer ${id}`);
    return [
      { question: "What is your favorite color?", answered: "Blue" },
      { question: "Do you prefer cats or dogs?", answered: "Dogs" },
    ];
  } catch (error) {
    console.log(error);
  }
};

// Function to get email template (no database, just a placeholder)
export const onGetEmailTemplate = async (id: string) => {
  try {
    console.log(`Fetching email template for campaign ${id}`);
    return "Dummy Email Template";
  } catch (error) {
    console.log(error);
  }
};
