# Octobit8 Website

A modern, responsive website for Octobit8, featuring cloud and DevOps training courses, built with Next.js and TypeScript.

## Features

### Training Courses

- **Cloud Training**

  - AWS Cloud Training
  - Azure Cloud Training
  - GCP Cloud Training

- **DevOps Training**
  - AWS DevOps
  - Azure DevOps
  - GCP DevOps
  - Jenkins
  - GitLab CI
  - GitHub Actions

### Course Features

- Detailed course content and modules
- Demo video integration
- Course pricing and enrollment
- Secure payment integration with Razorpay
- Course registration system

### Contact System

- Contact form with Google Sheets integration
- Form validation and error handling
- Success/error notifications
- Automatic data storage in Google Sheets

### Technical Features

- Responsive design for all devices
- Modern UI with Tailwind CSS
- Smooth animations with Framer Motion
- TypeScript for type safety
- Server-side rendering with Next.js
- API routes for backend functionality

## Tech Stack

- **Frontend**

  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Heroicons

- **Backend**
  - Next.js API Routes
  - Google Sheets API
  - Razorpay Payment Gateway

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Google Cloud Project (for Google Sheets integration)
- Razorpay Account (for payment processing)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Sheets Integration
GOOGLE_CLIENT_EMAIL=your-service-account-email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="your-private-key"
GOOGLE_SHEET_ID=your-sheet-id

# Razorpay Integration
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/octobit8-website.git
cd octobit8-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
octobit8-website/
├── app/
│   ├── api/              # API routes
│   ├── career/          # Training course pages
│   ├── components/      # Reusable components
│   └── services/        # External service integrations
├── public/              # Static assets
└── styles/             # Global styles
```

## Features in Detail

### Course Pages

- Detailed course information
- Module-wise content breakdown
- Course features and benefits
- Pricing and enrollment options
- Demo video integration

### Payment Integration

- Secure payment processing with Razorpay
- Test mode support
- Payment success/failure handling
- Order management

### Contact Form

- Form validation
- Google Sheets integration
- Success/error notifications
- Course-specific submissions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@octobit8.com or create an issue in the repository.
