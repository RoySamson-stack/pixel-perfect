import React from 'react';
import { ChevronLeft, ChevronRight, Star, Home, FileText, BarChart3, Users, Code, MessageSquare, Play, Calendar, Layers, PenTool, Link, Share2 } from 'lucide-react';

const TheySaidLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-transparent">
        <div className="flex items-center space-x-1">
          <span className="text-2xl font-bold text-gray-900">THEYSAID</span>
          <div className="w-0 h-0 border-l-[10px] border-l-purple-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
        </div>
        
        <div className="hidden md:flex items-center space-x-12 flex-1 justify-center">
          <a href="#" className="text-gray-900 hover:text-purple-600 font-medium">Home</a>
          <a href="#" className="text-gray-900 hover:text-purple-600 font-medium">Product Overview</a>
          <div className="relative group">
            <a href="#" className="text-gray-900 hover:text-purple-600 font-medium flex items-center">
              Resources
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <a href="#" className="text-gray-900 hover:text-purple-600 font-medium">Pricing</a>
          <a href="#" className="text-gray-900 hover:text-purple-600 font-medium">Contact</a>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="text-gray-900 hover:text-purple-600 font-medium">Login</button>
          <button className="bg-transparent border border-gray-900 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium">
            Get Started - Free
          </button>
        </div>
      </nav>

      <main className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="flex items-center bg-yellow-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2 fill-yellow-500 text-yellow-500" />
                #1 Product of the Day
              </div>
              <div className="flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                4.8/5 G2 Rating
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl font-normal text-gray-900 mb-4 leading-tight">
              Don't create a survey.
              <br />
              <span className="font-bold">Start a conversation</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              10x your insights with AI surveys and interviews
            </p>
            
            <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center mx-auto shadow-lg">
              Get Started Free
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            
            <p className="text-sm text-gray-500 mt-3 italic">No credit card required</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-20">
            <div className="bg-gray-900 p-4 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-6">
                <ChevronLeft className="w-5 h-5 text-gray-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Post-onboarding survey</h3>
              </div>
              
              <div className="flex border-b border-gray-200 mb-6">
                <button className="px-4 py-2 text-gray-500 border-b-2 border-transparent">Analytics</button>
                <button className="px-4 py-2 text-gray-500 border-b-2 border-transparent">Insights</button>
                <button className="px-4 py-2 text-purple-600 border-b-2 border-purple-600 font-medium">AI</button>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <p className="text-blue-800 text-sm">Sign up to comment, edit, inspect and more.</p>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">Sign up</button>
                    <button className="bg-white border border-gray-300 px-4 py-1 rounded text-sm flex items-center">
                      <span className="mr-2">G</span>
                      Continue
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">You wanted to know</p>
                  <p className="font-semibold text-gray-900 mb-4">
                    Why do people stop using the product after they've completed their free trial?
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-gray-700">Slow page loading is responsible for most speed complaints</p>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">20</span>
                      </div>
                    </div>
                    
                    <div className="bg-pink-100 p-4 rounded-lg border border-pink-200">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-pink-800">The product isn't intuitive, and takes a long time to learn</p>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">60</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">60 Responses</h4>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                      <option>Response date (new to old)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    <div className="border-b border-gray-100 pb-3">
                      <p className="text-sm text-gray-800 mb-1">
                        "I couldn't figure out basic stuff, like <strong>how to create a new template</strong>"
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-500">admin@theysaid.io</p>
                        <p className="text-xs text-gray-400">9:05 PM</p>
                      </div>
                    </div>
                    
                    <div className="border-b border-gray-100 pb-3">
                      <p className="text-sm text-gray-800 mb-1">
                        "<strong>Lack of integration with our CRM system</strong> makes it difficult to track project status"
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-500">user2@company.com</p>
                        <p className="text-xs text-gray-400">8:42 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 border-t border-red-100">
              <p className="text-red-600 font-medium text-right">
                The product is really slow and hard to use, with many complaints about high pricing.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-8 opacity-60">
              <img src="/api/placeholder/120/40" alt="TestRigor" className="h-8" />
              <img src="/api/placeholder/120/40" alt="Snappt" className="h-8" />
              <img src="/api/placeholder/120/40" alt="Betterworks" className="h-8" />
              <img src="/api/placeholder/120/40" alt="Sumo Logic" className="h-8" />
              <img src="/api/placeholder/120/40" alt="Elements" className="h-8" />
              <img src="/api/placeholder/120/40" alt="Santa Cruz" className="h-8" />
              <img src="/api/placeholder/120/40" alt="Comply365" className="h-8" />
              <img src="/api/placeholder/120/40" alt="Kiln" className="h-8" />
            </div>
          </div>

          <section className="mb-20">
            <div className="bg-red-50 p-6 rounded-lg mb-8 text-center">
              <p className="text-red-600 font-medium text-lg">
                The product is really slow and hard to use, with many complaints about high pricing.
              </p>
            </div>
            
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold text-gray-900">
                See what our customers<br />had to say.
              </h2>
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col space-y-8">
              <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/api/placeholder/64/64" alt="Alex Farmer" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-4 text-base">
                    "Implementing TheySaid has led to a 5-10% increase in qualified leads from our existing customers in just a few months while reducing churn. The results speak for themselves."
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Alex Farmer</h4>
                    <p className="text-sm text-gray-500">Chief Revenue Office @ Nezasa</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/api/placeholder/64/64" alt="Srikrishnan Ganesan" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-4 text-base">
                    "Integrating TheySaid has been a game-changer. We've seen a 5-10% decrease in customer churn with an increase in upsell opportunities since its implementation."
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Srikrishnan Ganesan</h4>
                    <p className="text-sm text-gray-500">Co-Founder & CEO @ Rocketlane</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/api/placeholder/64/64" alt="Brook P." className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-4 text-base">
                    "How did TheySaid AI come up with such great question recommendations? These are questions that our teams really want to know and discussed internally a lot. I am impressed!"
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Brook P.</h4>
                    <p className="text-sm text-gray-500">VP, Marketing @ DX</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Not your grandpa's survey tool
              </h2>
              <p className="text-xl text-gray-600">
                TheySaid AI drives the entire feedback experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI survey setup</h3>
                <p className="text-gray-600 mb-8">
                  Type a short sentence about what you want to learn, and AI will create an entire project for you.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI insights</h3>
                <p className="text-gray-600 mb-8">
                  As your responses come in, AI analyzes the feedback for themes and insights that need your attention.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">You wanted to know</p>
                  <h4 className="font-bold text-gray-900 mb-4">
                    What's the biggest thing keeping prospects from subscribing to our service?
                  </h4>
                  <div className="bg-white p-4 rounded border">
                    <p className="text-sm text-gray-600 mb-1">TheySaid</p>
                    <p className="text-red-600 font-medium">
                      What's the biggest thing keeping prospects from subscribing to our service?
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-pink-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI action items</h3>
                <p className="text-gray-600 mb-8">
                  AI reviews each response and determines what actions you need to take action. Soon, AI can take action directly in your personalized
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TheySaidLanding;