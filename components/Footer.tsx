import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPinIcon className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Varanasi Office</h3>
                  <p className="text-gray-600">185 BARA LAL CHRAIST NAGAR, Varanasi, Uttar Pradesh, India, 221007</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPinIcon className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Noida Office</h3>
                  <p className="text-gray-600">7th Floor, Plot A/8A, Knowledge Boulevard, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <PhoneIcon className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">+91-9923706784</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <EnvelopeIcon className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">contact@octobit8.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* Add other footer sections here */}
        </div>
      </div>
    </footer>
  );
} 