import { inngest } from "../client.js";
import User from "../../models/user.js";
import { NonRetriableError } from "inngest";
import { sendMail } from "../../utils/mailer.js";


export const onTicketCreated = inngest.createFunction(
    { id: "on-Ticket-created", retries: 2},
    { event: "ticket/created"},

    async({event, step}) => {

        try{

            const {ticketId} = event.data

            await step.run("fetch-ticket")

        }
        catch (error) {

        }

    }
)