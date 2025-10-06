import { Droplets, Leaf, BookOpen, Users, Calendar } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const focusAreas = [
    {
      icon: Droplets,
      title: 'Clean Water & Sanitation',
      description: 'Promoting sustainable water use and improving access to clean water in communities.',
    },
    {
      icon: Leaf,
      title: 'Ecosystem Restoration',
      description: 'Restoring mangroves, wetlands, and forests to protect biodiversity.',
    },
    {
      icon: BookOpen,
      title: 'Environmental Education',
      description: 'Raising awareness on water hygiene and environmental responsibility.',
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Working with schools, local councils, and women-led groups for sustainable impact.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/WhatsApp Image 2025-10-06 at 6.43.09 AM.jpeg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4 max-w-4xl">
            <img src="/logo.jpeg" alt="Her_Hydro Logo" className="h-32 w-32 mx-auto mb-6 object-contain" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advocating for Clean Water, Healthy Ecosystems
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Building Sustainable Communities Across Nigeria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('about')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                Learn More
              </button>
              <a
                href="https://calendly.com/omoteshowojane"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her_Hydro is a youth-led environmental NGO dedicated to achieving SDG 6 – Clean Water and Sanitation by promoting sustainable water use, biodiversity conservation, and climate-resilient communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/WhatsApp Image 2025-10-06 at 6.19.43 AM.jpeg"
                alt="Community water project"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h3>
              <p className="text-gray-600 mb-6">
                We work with schools, local councils, and women-led groups to raise awareness on water hygiene, restore degraded ecosystems, and inspire grassroots action for environmental protection across Nigeria.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600">
              Working towards sustainable development and environmental protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <area.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl mb-8">
                A Nigeria where every community enjoys safe water, healthy ecosystems, and a culture of environmental responsibility.
              </p>
              <h3 className="text-2xl font-bold mb-4">Join Our Movement</h3>
              <p className="text-lg">
                Join our community initiatives, volunteer in restoration projects, or partner with us to protect Nigeria's natural resources.
              </p>
            </div>
            <div>
              <img
                src="/WhatsApp Image 2025-10-06 at 6.39.48 AM.jpeg"
                alt="Community volunteers"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to learn how you can contribute to clean water access and ecosystem restoration in Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Contact Us
            </button>
            <a
              href="https://calendly.com/omoteshowojane"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
