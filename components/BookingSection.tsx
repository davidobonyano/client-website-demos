"use client";

import { cn } from "@/lib/utils";

interface BookingFormProps {
    title?: string;
    themeColor?: string;
}

export default function BookingSection({ title = "Book an Appointment", themeColor = "bg-blue-600" }: BookingFormProps) {
    return (
        <section className="py-24 bg-white" id="booking">
            <div className="container-width max-w-4xl">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                    <div className={cn("p-10 md:w-2/5 text-white flex flex-col justify-center", themeColor)}>
                        <h2 className="text-3xl font-bold mb-4">{title}</h2>
                        <p className="opacity-90 leading-relaxed mb-6">
                            Fill out the form and we will get back to you within 24 hours to confirm your schedule.
                        </p>
                        <div className="space-y-4 text-sm opacity-80">
                            <p>📞 +1 (555) 123-4567</p>
                            <p>📧 contact@example.com</p>
                        </div>
                    </div>

                    <div className="p-10 md:w-3/5">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Service Type</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white">
                                    <option>Standard Service</option>
                                    <option>Premium Service</option>
                                    <option>Consultation</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Preferred Date</label>
                                <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                            </div>

                            <button className={cn("w-full py-4 rounded-lg font-bold text-white shadow-lg mt-4 hover:opacity-90 transition-opacity", themeColor)}>
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
