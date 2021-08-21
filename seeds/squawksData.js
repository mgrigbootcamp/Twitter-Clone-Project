const { Squawk } = require('../models');

const squawksdata =  [
  {
    "id": 1,
    "user_id": 6,
    "squawk": "curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus",
    "posted_at": "2020-10-05 10:50:52"
  }, 
  {
    "id": 2,
    "user_id": 4,
    "squawk": "sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero",
    "posted_at": "2021-02-12 21:55:57"
  }, 
  {
    "id": 3,
    "user_id": 7,
    "squawk": "tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis",
    "posted_at": "2021-03-11 08:25:44"
  }, 
  {
    "id": 4,
    "user_id": 4,
    "squawk": "vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut",
    "posted_at": "2020-11-25 10:42:55"
  }, 
  {
    "id": 5,
    "user_id": 5,
    "squawk": "mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non",
    "posted_at": "2021-03-20 05:25:24"
  }, 
  {
    "id": 6,
    "user_id": 8,
    "squawk": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo",
    "posted_at": "2020-09-30 22:39:49"
  }, 
  {
    "id": 7,
    "user_id": 9,
    "squawk": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et",
    "posted_at": "2021-01-20 04:49:35"
  }, 
  {
    "id": 8,
    "user_id": 7,
    "squawk": "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum",
    "posted_at": "2021-02-22 12:20:43"
  }, 
  {
    "id": 9,
    "user_id": 2,
    "squawk": "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula",
    "posted_at": "2020-08-21 04:45:58"
  }, 
  {
    "id": 10,
    "user_id": 7,
    "squawk": "duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit",
    "posted_at": "2020-08-27 23:32:19"
  }, 
  {
    "id": 11,
    "user_id": 6,
    "squawk": "massa id nisl venenatis lacinia aenean sit amet justo morbi ut",
    "posted_at": "2021-04-02 10:49:05"
  }, 
  {
    "id": 12,
    "user_id": 6,
    "squawk": "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam",
    "posted_at": "2021-07-02 14:17:49"
  }, 
  {
    "id": 13,
    "user_id": 3,
    "squawk": "nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero",
    "posted_at": "2021-04-24 16:33:17"
  }, 
  {
    "id": 14,
    "user_id": 4,
    "squawk": "donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio",
    "posted_at": "2021-04-12 10:45:46"
  }, 
  {
    "id": 15,
    "user_id": 6,
    "squawk": "consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam",
    "posted_at": "2021-04-05 21:51:48"
  }, 
  {
    "id": 16,
    "user_id": 4,
    "squawk": "orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam",
    "posted_at": "2021-02-28 02:28:15"
  }, 
  {
    "id": 17,
    "user_id": 4,
    "squawk": "turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
    "posted_at": "2021-02-10 11:50:53"
  }, 
  {
    "id": 18,
    "user_id": 6,
    "squawk": "cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum",
    "posted_at": "2021-05-24 03:37:40"
  }, 
  {
    "id": 19,
    "user_id": 9,
    "squawk": "enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue",
    "posted_at": "2021-06-17 21:33:12"
  }, 
  {
    "id": 20,
    "user_id": 7,
    "squawk": "consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum",
    "posted_at": "2020-12-10 23:14:09"
  }, 
  {
    "id": 21,
    "user_id": 4,
    "squawk": "curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero",
    "posted_at": "2021-02-10 07:57:12"
  }, 
  {
    "id": 22,
    "user_id": 3,
    "squawk": "eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim",
    "posted_at": "2021-04-05 22:37:45"
  }, 
  {
    "id": 23,
    "user_id": 8,
    "squawk": "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
    "posted_at": "2021-07-03 23:57:06"
  }, 
  {
    "id": 24,
    "user_id": 4,
    "squawk": "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
    "posted_at": "2021-08-01 02:46:39"
  }, 
  {
    "id": 25,
    "user_id": 7,
    "squawk": "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
    "posted_at": "2020-12-12 18:22:50"
  }
];

const seedSquawks = () => Squawk.bulkCreate(squawksdata);

module.exports = seedSquawks;