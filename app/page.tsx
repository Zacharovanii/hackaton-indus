"use client";

import AIGuide from "./components/ChatBot";
import TravelMap from "./components/MapView";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			{/* Header */}
			<header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center space-x-3">
							<div>
								<h1 className="text-xl font-bold text-gray-900 dark:text-white">
									RouteRussia
								</h1>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									Интерактивная карта автотуризма
								</p>
							</div>
						</div>

						{/* <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" className="hidden sm:flex">
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                Начать путешествие
              </Button>
            </div> */}
					</div>
				</div>
			</header>

			<div className="grid grid-cols-[1fr_2fr]">
				{/* Sidebar */}
				<aside
					className={`
          lg:static p-4 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-r border-gray-200 dark:border-gray-700
          transform transition-transform duration-200 ease-in-out lg:transform-none
        `}
				>
					<div className="h-full pt-6 pb-4 overflow-y-auto">
						<AIGuide />
					</div>
				</aside>

				{/* Main Content */}
				<main className="overflow-y-auto scrollbar-hide">
					<div className="max-w-7xl mx-auto p-6">
						{/* Page Header */}
						<div className="mb-6">
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2"></h2>
						</div>

						{/* Dynamic Content */}
						<div className="animate-fade-in">
							<TravelMap />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
