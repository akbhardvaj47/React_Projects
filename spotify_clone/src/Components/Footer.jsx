import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-black text-white py-10">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* <!-- Column 1: About --> */}
                    <div>
                        <h3 class="font-bold text-lg mb-4">About</h3>
                        <ul>
                            <li><a href="#" class="hover:text-green-500">About Spotify</a></li>
                            <li><a href="#" class="hover:text-green-500">Jobs</a></li>
                            <li><a href="#" class="hover:text-green-500">For the Record</a></li>
                        </ul>
                    </div>

                    {/* <!-- Column 2: Company --> */}
                    <div>
                        <h3 class="font-bold text-lg mb-4">Company</h3>
                        <ul>
                            <li><a href="#" class="hover:text-green-500">Our Story</a></li>
                            <li><a href="#" class="hover:text-green-500">Investor Relations</a></li>
                            <li><a href="#" class="hover:text-green-500">Community</a></li>
                        </ul>
                    </div>

                    {/* <!-- Column 3: Legal --> */}
                    <div>
                        <h3 class="font-bold text-lg mb-4">Legal</h3>
                        <ul>
                            <li><a href="#" class="hover:text-green-500">Privacy Center</a></li>
                            <li><a href="#" class="hover:text-green-500">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-green-500">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* <!-- Column 4: Social --> */}
                    <div>
                        <h3 class="font-bold text-lg mb-4">Social</h3>
                        <ul>
                            <li><a href="#" class="hover:text-green-500">Facebook</a></li>
                            <li><a href="#" class="hover:text-green-500">Twitter</a></li>
                            <li><a href="#" class="hover:text-green-500">Instagram</a></li>
                        </ul>
                    </div>

                    {/* <!-- Column 5: Support --> */}
                    <div>
                        <h3 class="font-bold text-lg mb-4">Support</h3>
                        <ul>
                            <li><a href="#" class="hover:text-green-500">Help</a></li>
                            <li><a href="#" class="hover:text-green-500">Contact</a></li>
                            <li><a href="#" class="hover:text-green-500">Community Support</a></li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Footer Bottom --> */}
                <div class="text-center text-sm mt-8">
                    <p>&copy; 2025 Spotify AB</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer