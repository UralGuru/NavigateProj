//ссылка для получения токена
//https://oauth.vk.com/authorize?client_id=8007992&display=page&redirect_uri=&scope=video,offline&response_type=token&v=5.52
//
//
//
//video object example:
// {
//     "adding_date": 1616149898,
//     "can_comment": 1,
//     "can_like": 1,
//     "can_repost": 1,
//     "can_subscribe": 1,
//     "can_add_to_faves": 1,
//     "can_add": 1,
//     "comments": 112,
//     "date": 1616590806,
//     "description": "Регистрация на очные дни открытых дверей: urfu.ru/ru/events/10452\n\nЛичный кабинет абитуриента: priem.urfu.ru\n\nСериал «Прием, УрФУ!»: urfu.ru/priemurfu",
//     "duration": 3120,
//     "photo_130": "https://sun9-1.userapi.com/impf/gNI2DA8oRGiBoW4aHUjr8WtKAppeUSuw_OqKAw/J8lUGpYnZ8I.jpg?size=130x96&quality=96&keep_aspect_ratio=1&background=000000&sign=9bd973e5e90491e41523bcebd3c81de8&c_uniq_tag=sNsor7nJk5NU7Dp_0xiI1Ql7aB14klf3hVKEFKFJuWA&type=video_thumb",
//     "photo_320": "https://sun9-1.userapi.com/impf/gNI2DA8oRGiBoW4aHUjr8WtKAppeUSuw_OqKAw/J8lUGpYnZ8I.jpg?size=320x240&quality=96&keep_aspect_ratio=1&background=000000&sign=581ef1147735ba39f678ee554d09e69e&c_uniq_tag=30NFwrNnQ-r-fGiuOr2RHrBVWmcwmAq1gtsP9EbiOtE&type=video_thumb",
//     "photo_800": "https://sun9-1.userapi.com/impf/gNI2DA8oRGiBoW4aHUjr8WtKAppeUSuw_OqKAw/J8lUGpYnZ8I.jpg?size=800x450&quality=96&keep_aspect_ratio=1&background=000000&sign=1f09a48f4ebe20f61efba06938833c68&c_uniq_tag=9CevN4FrJejaLGj28SKTUql3zyKZptizNOS0_ayp2Tw&type=video_thumb",
//     "photo_1280": "https://sun9-1.userapi.com/impf/gNI2DA8oRGiBoW4aHUjr8WtKAppeUSuw_OqKAw/J8lUGpYnZ8I.jpg?size=1280x720&quality=96&sign=e09b41c7b1e1733a47c7cf8d2209ffaf&c_uniq_tag=mC3ZSNm3-jVD0EkQ1ES2OTfiGgVYNuolQXNMn9_KK2Q&type=video_thumb",
//     "first_frame_130": "https://i.mycdn.me/getVideoPreview?id=1185499122360&idx=0&type=35&tkn=Q_qVQ2xhqMEB7lK6xT4ZK6l24Ic",
//     "first_frame_160": "https://i.mycdn.me/getVideoPreview?id=1185499122360&idx=0&type=34&tkn=c0DNIrzm2QgC36HkA0nabTZaaL4",
//     "first_frame_320": "https://i.mycdn.me/getVideoPreview?id=1185499122360&idx=0&type=33&tkn=XL4H3pA9GKHXMmYwrK-9vZaMtjQ",
//     "first_frame_800": "https://i.mycdn.me/getVideoPreview?id=1185499122360&idx=0&type=32&tkn=OQKXUl8jHoh9zmt2GM2ZizTcs5E",
//     "first_frame_1280": "https://i.mycdn.me/getVideoPreview?id=1185499122360&idx=0&type=39&tkn=TmEczWXfck7R87FVWIFekMonqRo",
//     "width": 1920,
//     "height": 1080,
//     "id": 456239369,
//     "owner_id": -22301031,
//     "ov_id": "2171426909112",
//     "title": "Институт экономики и управления",
//     "player": "https://vk.com/video_ext.php?oid=-22301031&id=456239369&hash=e4fb4df7636e6f5b&__ref=vk.api&api_hash=1637893102f966ce29ca446195b7_GEYDONZRGI4TONQ",
//     "views": 6136
// }



import $ from 'jquery';


function getUrl(method, params) {
	if (!method) throw new Error('Invalid method');
	params = params || {};
	params['access_token'] = '922a5b0696184ce96eb933e00d21a7343147f0d451719bf5a2be7bfcc243190cfc54b8a706fa1249b9583';
	return "https://api.vk.com/method/" + method + "?" + $.param(params);
}

function sendRequest(offset) {
    let videos = [];
	$.ajax({
		url: getUrl('video.get', {v: 5.81, owner_id: -22301031, offset: offset, count: 200}),
		method: "GET",
		dataType: "JSONP",
		success: function(data) {
            videos.push(...data.response.items);
        }
	});
    return videos;
}

export const videos = sendRequest(0);

