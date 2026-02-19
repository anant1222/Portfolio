Built with next.js, [shadcn/ui](https://ui.shadcn.com/), and [magic ui](https://magicui.design/), deployed on Vercel.

# Features

- Setup only takes a few minutes by editing the [single config file](./src/data/resume.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/UI, TailwindCSS, Framer Motion, Magic UI
- Includes a blog
- Responsive for different devices
- Optimized for Next.js and Vercel

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ben04rogers/portfolio-v3
   ```

2. Move to the cloned directory

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the local Server:

   ```bash
   npm run dev
   ```

5. Open the [Config file](./src/data/data.ts) and make changes

## EmailJS Setup (Contact Form)

The contact form uses EmailJS to send emails directly from the frontend without a backend server.

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Get your credentials:**
   - Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
   - Find your **Public Key** in Account > API Keys
   - Create an **Email Template** in Email Templates section and note the Template ID
   - Your Service ID is already configured: `service_ahoobxo`

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your EmailJS credentials:
     ```
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
     ```

4. **Configure Email Template:**
   - In EmailJS dashboard, go to Email Templates and create/edit your template
   - **IMPORTANT**: In the template settings, set the **Subject** field to: `{{subject}}`
   - Add these variables in the email body:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject (also use in Subject field)
     - `{{message}}` - Message content
     - `{{reply_to}}` - Reply-to email (same as from_email)
   
   **Note**: Make sure the Subject field in your EmailJS template uses `{{subject}}` and not a hardcoded value like "Contact Us:" - otherwise the dynamic subject won't appear.

5. **Install EmailJS package:**
   ```bash
   npm install @emailjs/browser
   ```

The contact form will now send emails directly from the browser!
