type imageUrls = string[];
type BlogType = {
	id: string;
	title: string;
	price?: string;
	subTitle?: Array<{
		id: string;
		title?: string;
		price?: string;
		departs?: string;
		schedule?: string[];
	}>;
	dateRange?: string;
	description: Array<string>;
	imageUrl: imageUrls;
	link: string;
	author?: string;
};

export const blogData: BlogType[] = [
	{
		id: "blog1",
		title: "Canberra - Tulip Festival",
		price: "From $99",
		dateRange: "Saturdays and Sundays from August 14 to October 15",
		subTitle: [
			{
				id: "blog1.1",
				title:
					"Cherry Blossom season Canberra: combined with visiting Canberra",
				price:
					"$190/person, open on weekends for group tours of 10 guests. There will also be private tours available upon request. ",
				departs: "on weekends",
				schedule: ["🚗 on weekends."],
			},
			{
				id: "blog1.2",
				title: "Tullip Top Garden or Canberra Tulip Festival",
				price:
					"$160/ticket departing on Sundays September 15, September 22, October 6 and October 13; and $99/ticket for September 29 only. Other days upon request from over 10 guests and ticket price is $150/person. ",
				departs:
					"on Sundays September 15, September 22, October 6 and October 13",
				schedule: ["🚗 on Sundays"],
			},
		],
		description: [
			"Canberra, the capital city of Australia, is often overshadowed by Sydney or Melbourne. However, it is a hidden treasure with numerous attractions, stunning landscapes, and a rich cultural scene. Here’s why you should contemplate a visit to Canberra for your next adventure:",
			"Canberra boasts historical sites like the Australian War Memorial with poignant exhibits, the extensive art collection at the National Gallery of Australia, and Parliament House for a glimpse into democracy. Surrounded by natural beauty, enjoy recreational activities at Lake Burley Griffin, encounter wildlife at Tidbinbilla Nature Reserve, and explore diverse flora at the Australian National Botanic Gardens.",
			"Discover Canberra District Wineries for cool-climate wines such as Shiraz and Riesling, taste local produce at Capital Region Farmers Market or Old Bus Depot Markets, and savour innovative cuisine at fine dining establishments like Aubergine and Monster Kitchen & Bar.",
			"Questacon offers interactive science exhibits for families, the National Zoo & Aquarium showcases Australian and global wildlife, and the National Museum of Australia delves into the country's history through innovative displays. Celebrate spring at Floriade with over a million blooming flowers or marvel at hot air balloons during the Canberra Balloon Spectacular in March.",
			" Canberra is a city that presents a unique blend of cultural richness, natural beauty, exciting attractions, and a thriving food and wine scene. Whether you’re exploring historical landmarks, enjoying outdoor adventures, indulging in gourmet cuisine, or attending vibrant festivals, Canberra has something to captivate every traveller. So, pack your bags and prepare to discover the wonders of Australia’s capital city, Canberra!",
		],
		link: "https://www.netcodedev.com",
		imageUrl: [
			"/Images/tours/canberra/1.jpg",
			"/Images/tours/canberra/2.jpg",
			"/Images/tours/canberra/3.jpg",
			"/Images/tours/canberra/4.jpg",
			"/Images/tours/canberra/5.jpg",
			"/Images/tours/canberra/6.jpg",
			"/Images/tours/canberra/7.jpg",
			"/Images/tours/canberra/8.jpg",
			"/Images/tours/canberra/9.jpg",
			"/Images/tours/canberra/10.jpg",
			"/Images/tours/canberra/11.jpg",
			"/Images/tours/canberra/12.jpg",
			"/Images/tours/canberra/13.jpg",
			"/Images/tours/canberra/14.jpg",
			"/Images/tours/canberra/15.jpg",
			"/Images/tours/canberra/16.jpg",
			"/Images/tours/canberra/17.jpg",
			"/Images/tours/canberra/18.jpg",
			"/Images/tours/canberra/19.jpg",
			"/Images/tours/canberra/20.jpg",
			// "/Images/tours/canberra/21.jpg",
			// "/Images/tours/canberra/22.jpg",
			// "/Images/tours/canberra/23.jpg",
			// "/Images/tours/canberra/24.jpg",
			// "/Images/tours/canberra/25.jpg",
			// "/Images/tours/canberra/26.jpg",
			// "/Images/tours/canberra/27.jpg",
			// "/Images/tours/canberra/28.jpg",
			// "/Images/tours/canberra/29.jpg",
			// "/Images/tours/canberra/30.jpg",
			// "/Images/tours/canberra/31.jpg",
			// "/Images/tours/canberra/32.jpg",
			// "/Images/tours/canberra/33.jpg",
			// "/Images/tours/canberra/34.jpg",
		],
		author: "Ann's Uc Local Tours",
	},
	{
		id: "blog2",
		title: "Other Cherry Blossom Festival",
		dateRange: "From August to October in various regions",
		price: "From $190",
		subTitle: [
			{
				id: "blog2.1",
				title: "Show 1: is the earliest one - Weekend combined tour",
				price: "tour combined weekend: $190/person",
				departs: "August 11",
				schedule: [
					"Visiting Cherry Blossom garden - Picking fruit (Australian oranges and Mandarines) - Visiting historical sites Freedom Road - Hanging cave to see the difficult history of Australia. ",
				],
			},
			{
				id: "blog2.2",
				title: "Show 2: combined tour: Japanese Garden Cherry Blossom Festival",
				price:
					"Private tour costs from $195/person including festival and wine tasting tickets.",
				departs: "August 18 and August 25",
				schedule: [
					"🚗 Japanese Garden Cherry Blossom Festival combined with a visit to the coastal city - Vineyard and wine tasting",
				],
			},
			{
				id: "blog2.3",
				title: "Show 3: Blue Mountains Cherry Blossom Season",
				price: "$190/person - combined tour",
				departs:
					"departure from 10 guests on weekends . There will also be private tours available upon request.",
				schedule: [
					"🚗 Blue Mountains Cherry Blossom Season: combined with Blue Mountains heritage tour",
				],
			},
		],
		description: [
			"The Cherry Blossom Festival in Australia showcases the beauty of Sakura and Japanese culture at different locations.",
			"You can enjoy the stunning natural beauty, breathtaking blooms perfect for photography, relaxing walks, tea ceremonies, dressing up in kimonos, cultural performances, and authentic Japanese cuisine such as sushi, sake tastings, and sweet treats.",
			" Popular spots include Cherry Blossom Avenue at Auburn Botanic Gardens, which offers family activities, Cowra Japanese Garden for peaceful reflection and ikebana demonstrations, and the National Rhododendron Garden in Olinda, which provides scenic views and walking trails. It's best to plan your visit for early to mid-spring, check bloom predictions, and choose weekday visits or non-peak hours to avoid crowds. Additionally, you can enjoy festival amenities such as parking, restrooms, and food vendors.",
			" The Cherry Blossom Festivals provide a unique combination of natural beauty, cultural immersion, and a festive atmosphere to celebrate spring in Australia.",
		],
		imageUrl: [
			"/Images/tours/other-blossom/1.jpg",
			"/Images/tours/other-blossom/2.jpg",
			"/Images/tours/other-blossom/3.jpg",
			"/Images/tours/other-blossom/4.jpg",
			"/Images/tours/other-blossom/5.jpg",
			"/Images/tours/other-blossom/6.jpg",
			"/Images/tours/other-blossom/7.jpg",
			"/Images/tours/other-blossom/8.jpg",
			"/Images/tours/other-blossom/9.jpg",
			"/Images/tours/other-blossom/10.jpg",
		],
		link: "https://www.netcodedev.com",
		author: "Ann's Uc Local Tours",
	},
	{
		id: "blog3",
		title: "Perisher || Buller Snowy Mountains",
		description: [
			"Get ready for an incredible adventure in Perisher, New South Wales, Australia! Situated in the heart of the Snowy Mountains, Perisher offers an unforgettable experience surrounded by stunning natural beauty and thrilling outdoor activities. Be prepared to be awestruck by the snow-capped peaks, vast alpine meadows, and pristine wilderness, creating a perfect backdrop for your adventure. Explore the rugged terrain and glacial lakes, and embark on a different kind of adventure with snowshoeing and cross-country skiing, allowing you to explore the serene winter wonderland at your own pace.",
			"Experience the enchantment of skiing under the stars with Perisher’s night skiing sessions, creating an unforgettable evening on the mountain. Immerse yourself in the rich cultural significance of the region for the Indigenous Ngarigo people through guided tours and interpretive trails. Learn about the region’s gold mining history at Kiandra and the early European settlers who established communities in the Snowy Mountains. Relax in charming alpine lodges and hotels, offering a cozy retreat with modern amenities.",
			"Mount Muller in Victoria offers a perfect blend of natural beauty, outdoor adventure, and tranquil escape. Whether you’re hiking to the summit, camping under the stars, or exploring the local culture, Mount Muller promises a memorable and enriching experience. So pack your bags and get ready to discover the wonders of Mount Muller, one of Victoria’s most serene and captivating destinations!",
			"The Snowy Mountains offer a unique blend of natural beauty, rich culture, and adventurous activities. Whether you’re seeking a peaceful retreat in the mountains, exploring the stunning landscapes, or embarking on a thrilling adventure, the Snowy Mountains has something for every traveler. So, pack your bags and get ready to explore the Snowy Mountains and discover why it’s one of the world’s most beautiful and diverse destinations!",
		],
		imageUrl: [
			"/Images/tours/snow-mt/1.jpg",
			"/Images/tours/snow-mt/2.jpg",
			"/Images/tours/snow-mt/3.jpg",
			"/Images/tours/snow-mt/4.jpg",
			"/Images/tours/snow-mt/5.jpg",
			"/Images/tours/snow-mt/6.jpg",
			"/Images/tours/snow-mt/7.jpg",
			"/Images/tours/snow-mt/8.jpg",
			"/Images/tours/snow-mt/9.jpg",
			"/Images/tours/snow-mt/10.jpg",
			"/Images/tours/snow-mt/11.jpg",
			"/Images/tours/snow-mt/12.jpg",
			"/Images/tours/snow-mt/13.jpg",
			"/Images/tours/snow-mt/14.jpg",
			"/Images/tours/snow-mt/15.jpg",
			"/Images/tours/snow-mt/16.jpg",
			"/Images/tours/snow-mt/17.jpg",
			"/Images/tours/snow-mt/18.jpg",
			"/Images/tours/snow-mt/19.jpg",
			"/Images/tours/snow-mt/20.jpg",
			"/Images/tours/snow-mt/21.jpg",
			"/Images/tours/snow-mt/22.jpg",
		],
		link: "https://www.netcodedev.com",
		author: "Ann's Uc Local Tours",
	},

	// {
	// 	id: "blog3",
	// 	title: "Perisher Adventure",
	// 	description: [],
	// 	link: "https://www.netcodedev.com",
	// 	imageUrl: [
	// 		"/Images/Demo/3.jpeg",
	// 		"/Images/Demo/1.jpeg",
	// 		"/Images/Demo/2.jpeg",
	// 		"/Images/Demo/4.jpeg",
	// 		"/Images/Demo/5.jpeg",
	// 		"/Images/Demo/6.jpeg",
	// 	],
	// 	author: "Ann's Uc Local Tours",
	// },
	// {
	// 	id: "blog4",
	// 	title: "Perisher Adventure",
	// 	description: [
	// 		"Get ready for an incredible adventure in Perisher, New South Wales, Australia! Situated in the heart of the Snowy Mountains, Perisher offers an unforgettable experience surrounded by stunning natural beauty and thrilling outdoor activities. Be prepared to be awestruck by the snow-capped peaks, vast alpine meadows, and pristine wilderness, creating a perfect backdrop for your adventure. Explore the rugged terrain and glacial lakes, and embark on a different kind of adventure with snowshoeing and cross-country skiing, allowing you to explore the serene winter wonderland at your own pace.",
	// 		"Experience the enchantment of skiing under the stars with Perisher’s night skiing sessions, creating an unforgettable evening on the mountain. Immerse yourself in the rich cultural significance of the region for the Indigenous Ngarigo people through guided tours and interpretive trails. Learn about the region’s gold mining history at Kiandra and the early European settlers who established communities in the Snowy Mountains. Relax in charming alpine lodges and hotels, offering a cozy retreat with modern amenities.",
	// 		"Treat yourself to delicious meals at the mountain’s various restaurants and cafes, featuring locally sourced ingredients and catering to all tastes. Immerse yourself in the Perisher Peak Festival and Snowy Mountains Music Festival, bringing the mountain to life with music, entertainment, and a festive atmosphere. Experience the excitement of ski races, snowboard competitions, and endurance challenges held throughout the year. The local community in Perisher is known for its welcoming and friendly atmosphere, adding camaraderie and hospitality that enhance your overall experience. Get ready for an unforgettable adventure in the heart of the Snowy Mountains!",
	// 	],
	// 	link: "https://www.netcodedev.com",
	// 	imageUrl: [
	// 		"/Images/Demo/4.jpeg",
	// 		"/Images/Demo/1.jpeg",
	// 		"/Images/Demo/2.jpeg",
	// 		"/Images/Demo/3.jpeg",
	// 		"/Images/Demo/5.jpeg",
	// 		"/Images/Demo/6.jpeg",
	// 	],
	// 	author: "Ann's Uc Local Tours",
	// },
	// {
	// 	id: "blog5",
	// 	title: "Perisher Adventure",
	// 	description: [
	// 		"Get ready for an incredible adventure in Perisher, New South Wales, Australia! Situated in the heart of the Snowy Mountains, Perisher offers an unforgettable experience surrounded by stunning natural beauty and thrilling outdoor activities. Be prepared to be awestruck by the snow-capped peaks, vast alpine meadows, and pristine wilderness, creating a perfect backdrop for your adventure. Explore the rugged terrain and glacial lakes, and embark on a different kind of adventure with snowshoeing and cross-country skiing, allowing you to explore the serene winter wonderland at your own pace.",
	// 		"Experience the enchantment of skiing under the stars with Perisher’s night skiing sessions, creating an unforgettable evening on the mountain. Immerse yourself in the rich cultural significance of the region for the Indigenous Ngarigo people through guided tours and interpretive trails. Learn about the region’s gold mining history at Kiandra and the early European settlers who established communities in the Snowy Mountains. Relax in charming alpine lodges and hotels, offering a cozy retreat with modern amenities.",
	// 		"Treat yourself to delicious meals at the mountain’s various restaurants and cafes, featuring locally sourced ingredients and catering to all tastes. Immerse yourself in the Perisher Peak Festival and Snowy Mountains Music Festival, bringing the mountain to life with music, entertainment, and a festive atmosphere. Experience the excitement of ski races, snowboard competitions, and endurance challenges held throughout the year. The local community in Perisher is known for its welcoming and friendly atmosphere, adding camaraderie and hospitality that enhance your overall experience. Get ready for an unforgettable adventure in the heart of the Snowy Mountains!",
	// 	],
	// 	link: "https://www.netcodedev.com",
	// 	imageUrl: [
	// 		"/Images/Demo/1.jpeg",
	// 		"/Images/Demo/2.jpeg",
	// 		"/Images/Demo/3.jpeg",
	// 		"/Images/Demo/5.jpeg",
	// 		"/Images/Demo/4.jpeg",
	// 		"/Images/Demo/6.jpeg",
	// 	],
	// 	author: "Ann's Uc Local Tours",
	// },
	// {
	// 	id: "blog6",
	// 	title: "Perisher Adventure",
	// 	description: [
	// 		"Get ready for an incredible adventure in Perisher, New South Wales, Australia! Situated in the heart of the Snowy Mountains, Perisher offers an unforgettable experience surrounded by stunning natural beauty and thrilling outdoor activities. Be prepared to be awestruck by the snow-capped peaks, vast alpine meadows, and pristine wilderness, creating a perfect backdrop for your adventure. Explore the rugged terrain and glacial lakes, and embark on a different kind of adventure with snowshoeing and cross-country skiing, allowing you to explore the serene winter wonderland at your own pace.",
	// 		"Experience the enchantment of skiing under the stars with Perisher’s night skiing sessions, creating an unforgettable evening on the mountain. Immerse yourself in the rich cultural significance of the region for the Indigenous Ngarigo people through guided tours and interpretive trails. Learn about the region’s gold mining history at Kiandra and the early European settlers who established communities in the Snowy Mountains. Relax in charming alpine lodges and hotels, offering a cozy retreat with modern amenities.",
	// 		"Treat yourself to delicious meals at the mountain’s various restaurants and cafes, featuring locally sourced ingredients and catering to all tastes. Immerse yourself in the Perisher Peak Festival and Snowy Mountains Music Festival, bringing the mountain to life with music, entertainment, and a festive atmosphere. Experience the excitement of ski races, snowboard competitions, and endurance challenges held throughout the year. The local community in Perisher is known for its welcoming and friendly atmosphere, adding camaraderie and hospitality that enhance your overall experience. Get ready for an unforgettable adventure in the heart of the Snowy Mountains!",
	// 	],
	// 	link: "https://www.netcodedev.com",
	// 	imageUrl: [
	// 		"/Images/Demo/3.jpeg",
	// 		"/Images/Demo/6.jpeg",
	// 		"/Images/Demo/1.jpeg",
	// 		"/Images/Demo/2.jpeg",
	// 		"/Images/Demo/4.jpeg",
	// 		"/Images/Demo/5.jpeg",
	// 	],
	// 	author: "Ann's Uc Local Tours",
	// },
];

// translate to vietnamese
export const blogDataVi: BlogType[] = [
	{
		id: "blog1",
		title: "Canberra - Lễ hội hoa Tulip",
		price: "Từ $99",
		subTitle: [
			{
				id: "blog1.1",
				title: "Mùa hoa Anh đào Thủ đô Canberra: kết hợp tham quan Canberra",
				price:
					"$190/khách mở vào các cuối tuần cho tour ghép từ 10 khách. Đồng thời cũng sẽ có tour riêng theo yêu cầu. ",
				departs: "Thứ Bảy, Chủ Nhật các tuần từ 14/8 đến 15/10",
				schedule: ["🚗 Thứ Bảy, Chủ Nhật."],
			},
			{
				id: "blog1.2",
				title: "Tullip Top Garden hoặc lễ hội hoa Tulip Canberra",
				price:
					"$160/vé khởi hành các ngày Chủ Nhật 15/9, 22/9, 6/10 và 13/10; và chỉ $99/vé cho riêng ngày 29/9. Các ngày khác theo yêu cầu từ trên 10 khách và giá vé $150/người. ",
				departs: "Các ngày Chủ Nhật 15/9, 22/9, 6/10 và 13/10",
				schedule: ["🚗 Các ngày Chủ Nhật"],
			},
		],
		dateRange:
			"Lễ hội hoa Tulip bắt đầu từ 14/9 đến 13/10 - Canberra - Giá vé từ $99/người.",
		description: [
			"Canberra, là thủ đô của Úc, thường bị lu mờ bởi Sydney hay Melbourne. Tuy nhiên, đây là một kho báu tiềm ẩn với vô số điểm tham quan, cảnh quan tuyệt đẹp và nền văn hóa phong phú. Đây là lý do tại sao bạn nên ghé thăm Canberra cho chuyến phiêu lưu tiếp theo của mình:",
			"Canberra tự hào có các di tích lịch sử như Đài tưởng niệm Chiến tranh Úc với các triển lãm sâu sắc, bộ sưu tập nghệ thuật phong phú tại Phòng trưng bày Quốc gia Úc và Tòa nhà Quốc hội để bạn có cái nhìn thoáng qua về nền dân chủ. Du khách sẽ tận hưởng các hoạt động giải trí tại Hồ Burley Griffin, gặp gỡ động vật hoang dã tại Khu bảo tồn Thiên nhiên Tidbinbilla và khám phá hệ thực vật đa dạng tại Vườn Bách thảo Quốc gia Úc, khám phá các Nhà máy rượu vang của Quận Canberra để tìm các loại rượu như Shiraz và Riesling, nếm thử các sản phẩm địa phương tại Chợ Nông sản Vùng Thủ đô hoặc Chợ Bến xe buýt Cũ, đồng thời thưởng thức ẩm thực sáng tạo tại các cơ sở ăn uống cao cấp như Aubergine và Monster Kitchen & Bar.",
			"Questacon cung cấp các triển lãm khoa học tương tác dành cho các gia đình, Vườn thú & Thủy cung Quốc gia trưng bày động vật hoang dã của Úc và toàn cầu, còn Bảo tàng Quốc gia Úc đi sâu vào lịch sử đất nước thông qua các trưng bày sáng tạo. Chào mừng mùa xuân tại Floriade với hơn một triệu bông hoa nở rộ hoặc ngạc nhiên trước khinh khí cầu trong Lễ hội khinh khí cầu Canberra vào tháng 3.",
			" Canberra là thành phố thể hiện sự pha trộn độc đáo giữa sự phong phú về văn hóa, vẻ đẹp tự nhiên, các điểm tham quan thú vị, nền ẩm thực và rượu vang phong phú. Cho dù bạn đang khám phá các địa danh lịch sử, tận hưởng những chuyến phiêu lưu ngoài trời, thưởng thức các món ăn ngon hay tham dự các lễ hội sôi động, Canberra có điều gì đó để thu hút mọi du khách. Vì vậy, hãy chuẩn bị hành lý và khám phá những điều kỳ diệu của thủ đô Canberra của Úc!",
		],
		link: "https://www.netcodedev.com",
		imageUrl: [
			"/Images/tours/canberra/1.jpg",
			"/Images/tours/canberra/2.jpg",
			"/Images/tours/canberra/3.jpg",
			"/Images/tours/canberra/4.jpg",
			"/Images/tours/canberra/5.jpg",
			"/Images/tours/canberra/6.jpg",
			"/Images/tours/canberra/7.jpg",
			"/Images/tours/canberra/8.jpg",
			"/Images/tours/canberra/9.jpg",
			"/Images/tours/canberra/10.jpg",
			"/Images/tours/canberra/11.jpg",
			"/Images/tours/canberra/12.jpg",
			"/Images/tours/canberra/13.jpg",
			"/Images/tours/canberra/14.jpg",
			"/Images/tours/canberra/15.jpg",
			"/Images/tours/canberra/16.jpg",
			"/Images/tours/canberra/17.jpg",
			"/Images/tours/canberra/18.jpg",
			"/Images/tours/canberra/19.jpg",
			"/Images/tours/canberra/20.jpg",
			// "/Images/tours/canberra/21.jpg",
			// "/Images/tours/canberra/22.jpg",
			// "/Images/tours/canberra/23.jpg",
			// "/Images/tours/canberra/24.jpg",
			// "/Images/tours/canberra/25.jpg",
			// "/Images/tours/canberra/26.jpg",
			// "/Images/tours/canberra/27.jpg",
			// "/Images/tours/canberra/28.jpg",
			// "/Images/tours/canberra/29.jpg",
			// "/Images/tours/canberra/30.jpg",
			// "/Images/tours/canberra/31.jpg",
			// "/Images/tours/canberra/32.jpg",
			// "/Images/tours/canberra/33.jpg",
			// "/Images/tours/canberra/34.jpg",
		],
		author: "Ann's Uc Local Tours",
	},
	{
		id: "blog2",
		title: "Chương trình hoa Anh đào khác",
		price: "Từ $190",
		subTitle: [
			{
				id: "blog2.1",
				title:
					"Chương trình 1: là chương trình sớm nhất - tour ghép các ngày cuối tuần",
				price: "tour ghép các ngày cuối tuần: $190/người",
				departs: "11/8",
				schedule: [
					"🚗 Thăm vườn hoa Anh đào - Hái trái cây (Cam và Quýt Úc) - Thăm di tích lịch sử Cung đường Tự do - hang Treo người để thấy quá trình lịch sử đầy khó khăn của nước Úc. ",
				],
			},
			{
				id: "blog2.2",
				title: "Chương trình 2 - tour ghép: Lễ hội hoa Anh đào Vườn Nhật Bản",
				price:
					"Tour riêng giá từ $195/người đã bao gồm vé lễ hội và vé nếm rượu vang.",
				departs: "18/8 và 25/8",
				schedule: [
					"🚗 Lễ hội hoa Anh đào Vườn Nhật Bản kết hợp thăm thành phố biển - Vườn nho nếm rượu vang.",
				],
			},
			{
				id: "blog2.3",
				title: "Chương trình 3: Mùa hoa Anh đào Blue Mountains",
				price: "$190/người - tour ghép",
				departs:
					"khởi hành từ 10 khách vào các cuối tuần. Đồng thời cũng sẽ có tour riêng theo yêu cầu.  ",
				schedule: [
					"🚗 Mùa hoa Anh đào Blue Mountains kết hợp tour di sản Blue Mountains",
				],
			},
		],
		description: [
			"Lễ hội hoa anh đào ở Úc thể hiện vẻ đẹp của hoa anh đào và văn hóa Nhật Bản ở nhiều địa điểm khác nhau.",
			"Bạn có thể tận hưởng vẻ đẹp thiên nhiên tuyệt đẹp, những bông hoa ngoạn mục, hoàn hảo để chụp ảnh, đi dạo thư giãn, nghi lễ trà, mặc Kimono, biểu diễn văn hóa và ẩm thực Nhật Bản chính thống như Sushi, nếm rượu Sake và đồ ngọt.",
			"Các địa điểm nổi tiếng bao gồm Đại lộ Cherry Blossom tại Vườn Bách thảo Auburn, nơi tổ chức các hoạt động dành cho gia đình, Vườn Nhật Bản Cowra để suy ngẫm yên bình và trình diễn nghệ thuật cắm hoa, và Vườn Đỗ quyên Quốc gia ở Olinda, nơi có khung cảnh tuyệt đẹp và những con đường đi bộ. Bạn nên lên kế hoạch cho chuyến thăm của mình từ đầu đến giữa mùa xuân, dự đoán hoa nở và chọn các chuyến tham quan vào các ngày trong tuần hoặc giờ không phải cao điểm để tránh đám đông. Ngoài ra, bạn có thể tận hưởng các tiện nghi của lễ hội như bãi đậu xe, nhà vệ sinh và quầy bán đồ ăn.",
			"Lễ hội hoa anh đào mang đến sự kết hợp độc đáo giữa vẻ đẹp tự nhiên, sự hòa nhập văn hóa và bầu không khí lễ hội để chào mừng mùa xuân ở Úc.",
		],
		imageUrl: [
			"/Images/tours/other-blossom/1.jpg",
			"/Images/tours/other-blossom/2.jpg",
			"/Images/tours/other-blossom/3.jpg",
			"/Images/tours/other-blossom/4.jpg",
			"/Images/tours/other-blossom/5.jpg",
			"/Images/tours/other-blossom/6.jpg",
			"/Images/tours/other-blossom/7.jpg",
			"/Images/tours/other-blossom/8.jpg",
			"/Images/tours/other-blossom/9.jpg",
			"/Images/tours/other-blossom/10.jpg",
		],
		link: "https://www.netcodedev.com",
		author: "Ann's Uc Local Tours",
	},
	{
		id: "blog3",
		title: "Núi Tuyết Perisher || Buller",
		description: [
			"Hãy sẵn sàng cho chuyến phiêu lưu đáng kinh ngạc ở Perisher, New South Wales, Úc! Nằm ở trung tâm của Dãy núi Snowy, Perisher mang đến trải nghiệm khó quên được bao quanh bởi vẻ đẹp thiên nhiên tuyệt đẹp và các hoạt động ngoài trời ly kỳ. Hãy chuẩn dành sự kinh ngạc trước những đỉnh núi phủ tuyết trắng, những đồng cỏ cao, rộng lớn cùng vùng hoang dã nguyên sơ, tạo nên bối cảnh hoàn hảo cho chuyến phiêu lưu, khám phá địa hình gồ ghề đồng thời bắt tay vào kiểu phiêu lưu khác với môn trượt tuyết, cho phép bạn khám phá xứ sở thần tiên mùa đông thanh bình.",
			"Trải nghiệm sự mê hoặc của môn trượt tuyết dưới bầu trời sao với các buổi trượt tuyết ban đêm của Perisher, tạo nên một buổi tối khó quên. Đắm mình trong ý nghĩa văn hóa phong phú của vùng đối với người Ngarigo bản địa thông qua các chuyến tham quan có hướng dẫn viên. Tìm hiểu về lịch sử khai thác mỏ  vàng tại Kiandra và những người định cư châu Âu đầu tiên đã thành lập các cộng đồng ở Dãy núi Snowy. Hãy thư giãn trong các nhà nghỉ và khách sạn tuyệt đẹp trên núi cao, mang đến nơi nghỉ dưỡng ấm cúng với các tiện nghi hiện đại.",
			"Núi Muller ở Victoria mang đến sự kết hợp hoàn hảo giữa vẻ đẹp tự nhiên, những cuộc phiêu lưu ngoài trời. Cho dù bạn đang đi bộ lên đỉnh núi, cắm trại dưới bầu trời đầy sao hay khám phá văn hóa địa phương, Núi Muller hứa hẹn mang lại trải nghiệm đáng nhớ và khó quên. Vì vậy, xách ba lô lên và sẵn sàng khám phá những kỳ quan của Núi Muller, một trong những điểm đến thanh bình và quyến rũ nhất ở Victoria!",
			"Dãy núi Snowy mang đến sự kết hợp độc đáo giữa vẻ đẹp tự nhiên, văn hóa phong phú và các hoạt động mạo hiểm. Cho dù bạn đang tìm kiếm một nơi trú ẩn yên bình, khám phá những cảnh quan tuyệt đẹp hay dấn thân vào một cuộc phiêu lưu ly kỳ. Dãy núi Snowy đều có thứ gì đó dành cho mọi người.",
			"Vì vậy, hãy chuẩn bị hành lý và sẵn sàng khám phá Dãy núi Tuyết và khám phá lý do tại sao nơi đây là một trong những điểm đến đẹp và đa dạng nhất thế giới!",
		],
		imageUrl: [
			"/Images/tours/snow-mt/1.jpg",
			"/Images/tours/snow-mt/2.jpg",
			"/Images/tours/snow-mt/3.jpg",
			"/Images/tours/snow-mt/4.jpg",
			"/Images/tours/snow-mt/5.jpg",
			"/Images/tours/snow-mt/6.jpg",
			"/Images/tours/snow-mt/7.jpg",
			"/Images/tours/snow-mt/8.jpg",
			"/Images/tours/snow-mt/9.jpg",
			"/Images/tours/snow-mt/10.jpg",
			"/Images/tours/snow-mt/11.jpg",
			"/Images/tours/snow-mt/12.jpg",
			"/Images/tours/snow-mt/13.jpg",
			"/Images/tours/snow-mt/14.jpg",
			"/Images/tours/snow-mt/15.jpg",
			"/Images/tours/snow-mt/16.jpg",
			"/Images/tours/snow-mt/17.jpg",
			"/Images/tours/snow-mt/18.jpg",
			"/Images/tours/snow-mt/19.jpg",
			"/Images/tours/snow-mt/20.jpg",
			"/Images/tours/snow-mt/21.jpg",
			"/Images/tours/snow-mt/22.jpg",
		],
		link: "https://www.netcodedev.com",
		author: "Ann's Uc Local Tours",
	},

	// {
	// 	id: "blog3",
	// 	title: "Perisher Adventure",
	// 	description: [],
	// 	link: "https://www.netcodedev.com",
	// 	imageUrl: [
	// 		"/Images/Demo/3.jpeg",
	// 		"/Images/Demo/1.jpeg",
	// 		"/Images/Demo/2.jpeg",
	// 		"/Images/Demo/4.jpeg",
	// 		"/Images/Demo/5.jpeg",
	// 		"/Images/Demo/6.jpeg",
	// 	],
	// 	author: "Ann's Uc Local Tours",
	// },
	// {
	// 	id: "blog4",
	// 	title: "Perisher Adventure",
	// 	description: [
	// 		"Get ready for an incredible adventure in Perisher, New South Wales, Australia! Situated in the heart of the Snowy Mountains, Perisher offers an unforgettable experience surrounded by stunning natural beauty and thrilling outdoor activities. Be prepared to be awestruck by the snow-capped peaks, vast alpine meadows, and pristine wilderness, creating a perfect backdrop for your adventure. Explore the rugged terrain and glacial lakes, and embark on a different kind of adventure with snowshoeing and cross-country skiing, allowing you to explore the serene winter wonderland at your own pace.",
	// 		"Experience the enchantment of skiing under the stars with Perisher’s night skiing sessions, creating an unforgettable evening on the mountain. Immerse yourself in the rich cultural significance of the region for the Indigenous Ngarigo people through guided tours and interpretive trails. Learn about the region’s gold mining history at Kiandra and the early European settlers who established communities in the Snowy Mountains. Relax in charming alpine lodges and hotels, offering a cozy retreat with modern amenities.",
	// 		"Treat yourself to delicious meals at the mountain’s various restaurants and cafes, featuring locally sourced ingredients and catering to all tastes. Immerse yourself in the Perisher Peak Festival and Snowy Mountains Music Festival, bringing the mountain to life with music, entertainment, and a festive atmosphere. Experience the excitement of ski races, snowboard competitions, and endurance challenges held throughout the year. The local community in Perisher is known for its welcoming and friendly atmosphere, adding camaraderie and hospitality that enhance your overall experience. Get ready for an unforgettable adventure in the heart of the Snowy Mountains!",
	// 	],
	// 	link: "https://www.netcodedev.com",
	// 	imageUrl: [
	// 		"/Images/Demo/4.jpeg",
	// 		"/Images/Demo/1.jpeg",
	// 		"/Images/Demo/2.jpeg",
	// 		"/Images/Demo/3.jpeg",
	// 		"/Images/Demo/5.jpeg",
	// 		"/Images/Demo/6.jpeg",
	// 	],
	// 	author: "Ann's Uc Local Tours",
	// },
	// {
	// 	id: "blog5",
	// 	title: "Perisher Adventure",
	// 	description: [
	// 		"Get ready for an incredible adventure in Perisher, New South Wales, Australia! Situated in the heart of the Snowy Mountains, Perisher offers an unforgettable experience surrounded by stunning natural beauty and thrilling outdoor activities. Be prepared to be awestruck by the snow-capped peaks, vast alpine meadows, and pristine wilderness, creating a perfect backdrop for your adventure. Explore the rugged terrain and glacial lakes, and embark on a different kind of adventure with snowshoeing and cross-country skiing, allowing you to explore the serene winter wonderland at your own pace.",
	// 		"Experience the enchantment of skiing under the stars with Perisher’s night skiing sessions, creating an unforgettable evening on the mountain. Immerse yourself in the rich cultural significance of the region for the Indigenous Ngarigo people through guided tours and interpretive trails. Learn about the region’s gold mining history at Kiandra and the early European settlers who established communities in the Snowy Mountains. Relax in charming alpine lodges and hotels, offering a cozy retreat with modern amenities.",
	// 		"Treat yourself to delicious meals at the mountain’s various restaurants and cafes, featuring locally sourced ingredients and catering to all tastes. Immerse yourself in the Perisher Peak Festival and Snowy Mountains Music Festival, bringing the mountain to life with music, entertainment, and a festive atmosphere. Experience the excitement of ski races, snowboard competitions, and endurance challenges held throughout the year. The local community in Perisher is known for its welcoming and friendly atmosphere, adding camaraderie and hospitality that enhance your overall experience. Get ready for an unforgettable adventure in the heart of the Snowy Mountains!",
	// 	],
	// 	link: "https://www.netcodedev.com",
	// 	imageUrl: [
	// 		"/Images/Demo/1.jpeg",
	// 		"/Images/Demo/2.jpeg",
	// 		"/Images/Demo/3.jpeg",
	// 		"/Images/Demo/5.jpeg",
	// 		"/Images/Demo/4.jpeg",
	// 		"/Images/Demo/6.jpeg",
	// 	],
	// 	author: "Ann's Uc Local Tours",
	// },
	// {
	// 	id: "blog6",
	// 	title: "Perisher Adventure",
	// 	description: [
	// 		"Get ready for an incredible adventure in Perisher, New South Wales, Australia! Situated in the heart of the Snowy Mountains, Perisher offers an unforgettable experience surrounded by stunning natural beauty and thrilling outdoor activities. Be prepared to be awestruck by the snow-capped peaks, vast alpine meadows, and pristine wilderness, creating a perfect backdrop for your adventure. Explore the rugged terrain and glacial lakes, and embark on a different kind of adventure with snowshoeing and cross-country skiing, allowing you to explore the serene winter wonderland at your own pace.",
	// 		"Experience the enchantment of skiing under the stars with Perisher’s night skiing sessions, creating an unforgettable evening on the mountain. Immerse yourself in the rich cultural significance of the region for the Indigenous Ngarigo people through guided tours and interpretive trails. Learn about the region’s gold mining history at Kiandra and the early European settlers who established communities in the Snowy Mountains. Relax in charming alpine lodges and hotels, offering a cozy retreat with modern amenities.",
	// 		"Treat yourself to delicious meals at the mountain’s various restaurants and cafes, featuring locally sourced ingredients and catering to all tastes. Immerse yourself in the Perisher Peak Festival and Snowy Mountains Music Festival, bringing the mountain to life with music, entertainment, and a festive atmosphere. Experience the excitement of ski races, snowboard competitions, and endurance challenges held throughout the year. The local community in Perisher is known for its welcoming and friendly atmosphere, adding camaraderie and hospitality that enhance your overall experience. Get ready for an unforgettable adventure in the heart of the Snowy Mountains!",
	// 	],
	// 	link: "https://www.netcodedev.com",
	// 	imageUrl: [
	// 		"/Images/Demo/3.jpeg",
	// 		"/Images/Demo/6.jpeg",
	// 		"/Images/Demo/1.jpeg",
	// 		"/Images/Demo/2.jpeg",
	// 		"/Images/Demo/4.jpeg",
	// 		"/Images/Demo/5.jpeg",
	// 	],
	// 	author: "Ann's Uc Local Tours",
	// },
];
