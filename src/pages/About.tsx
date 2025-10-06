import { Target, Eye, Droplets, Leaf, BookOpen, Users } from 'lucide-react';

export default function About() {
  const focusAreas = [
    {
      icon: Droplets,
      title: 'Clean Water & Sanitation',
      description: 'Ensuring communities have access to safe, clean drinking water and proper sanitation facilities. We implement water purification systems and educate communities on water conservation.',
      color: 'bg-blue-500',
    },
    {
      icon: Leaf,
      title: 'Ecosystem Restoration',
      description: 'Actively restoring mangroves, wetlands, and forests to combat climate change and protect biodiversity. We organize tree planting drives and habitat rehabilitation projects.',
      color: 'bg-green-500',
    },
    {
      icon: BookOpen,
      title: 'Environmental Education',
      description: 'Conducting workshops and seminars in schools and communities to raise awareness about water hygiene, climate change, and sustainable practices.',
      color: 'bg-amber-500',
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Building partnerships with schools, local councils, and women-led groups to create sustainable livelihoods while protecting the environment.',
      color: 'bg-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Her_Hydro</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A youth-led environmental NGO transforming communities through sustainable water solutions and ecosystem restoration
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/WhatsApp Image 2025-10-06 at 6.21.33 AM.jpeg"
                alt="Her_Hydro team"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                Her_Hydro is a youth-led environmental NGO based in Enugu, Nigeria, dedicated to achieving SDG 6 – Clean Water and Sanitation. We believe that access to clean water is a fundamental human right and that healthy ecosystems are essential for thriving communities.
              </p>
              <p className="text-lg text-gray-600">
                Through grassroots action, community education, and strategic partnerships, we're working to create climate-resilient communities across Nigeria while preserving our natural heritage for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-100 p-4 rounded-full">
                  <Target className="h-10 w-10 text-cyan-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To improve access to clean water and preserve aquatic and terrestrial ecosystems through community education, habitat restoration, and advocacy.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Eye className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Nigeria where every community enjoys safe water, healthy ecosystems, and a culture of environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work across multiple sectors to create lasting environmental and social impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`${area.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h2>
              <p className="text-lg text-gray-600 mb-6">
                Join our community initiatives, volunteer in restoration projects, or partner with us to protect Nigeria's natural resources.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-2 rounded-full mr-4">
                    <Users className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Volunteer</h4>
                    <p className="text-gray-600">Join our field projects and community programs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Partner</h4>
                    <p className="text-gray-600">Collaborate with us on environmental initiatives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Support</h4>
                    <p className="text-gray-600">Help us expand our impact across Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/WhatsApp Image 2025-10-06 at 6.20.02 AM.jpeg"
                alt="Community engagement"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 99, 132, 0.9), rgba(0, 99, 132, 0.9)), url('/WhatsApp Image 2025-10-06 at 6.19.43 AM.jpeg')",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Together, We Can Make a Difference</h2>
          <p className="text-xl mb-8">
            Every action counts in our mission to protect Nigeria's water resources and ecosystems. Join us today and be part of the solution.
          </p>
          <div className="flex justify-center">
            <img src="/logo.jpeg" alt="Her_Hydro Logo" className="h-24 w-24 object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
