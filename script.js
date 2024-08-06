document.addEventListener('DOMContentLoaded', function(){

  const imagesAll = [
    {src: 'https://plus.unsplash.com/premium_photo-1680012591126-13bd72f465b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDE%3D', name: 'all'},
    {src: 'https://images.unsplash.com/photo-1643868420405-48e32c6f4620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmFtaWx5fGVufDB8fDB8fHwy', name: 'all'},
    {src: 'https://images.unsplash.com/photo-1591980607162-923fa31e8240?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyaWVuZHN8ZW58MHx8MHx8fDI%3D', name: 'all'},
    {src: 'https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', name: 'all'},
    {src: 'https://media.istockphoto.com/id/1354880099/photo/golden-retriever-puppy.webp?b=1&s=170667a&w=0&k=20&c=MvIVroOwBcpZ7FE2ezjxWoh3Wv_2kmTzzQ59e9Rg9BQ=', name: 'all'},
    {src: 'https://plus.unsplash.com/premium_photo-1680111699826-a65396efe9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHwx', name: 'all'},
    {src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'all'},
    {src: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWVufGVufDB8fDB8fHww', name: 'all'},
    {src: 'https://images.unsplash.com/photo-1480499484268-a85a2414da81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', name: 'all'},
    {src: 'https://images.unsplash.com/photo-1628191013085-990d39ec25b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'all'},
    {src: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', name: 'all'},
    {src: 'https://plus.unsplash.com/premium_photo-1680790392519-822f17a660fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHwx', name: 'all'},
  ]
  const imagesMen = [
    {src: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWVufGVufDB8fDB8fHww', name: 'men'},
    {src: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVufGVufDB8fDB8fHww', name: 'men'},
    {src: 'https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVufGVufDB8fDB8fHww', name: 'men'},
    {src: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1lbnxlbnwwfHwwfHx8MA%3D%3D', name: 'men'},
    {src: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', name: 'men'},
    {src: 'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', name: 'men'},
    {src: 'https://images.unsplash.com/photo-1595347097560-69238724e7bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', name: 'men'},
    {src: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', name: 'men'},
    {src: 'https://images.unsplash.com/photo-1624140716840-5d89f311f500?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww', name: 'men'},
    {src: 'https://images.unsplash.com/photo-1622020920816-cd528763211a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D', name: 'men'},
    {src: 'https://images.unsplash.com/photo-1679673988162-018d0400240e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D', name: 'men'},
    {src: 'https://images.unsplash.com/photo-1674333162697-ccdde1ed4cca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0aWZ1bCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D', name: 'men'},
  ]
  const imagesWomen = [
    {src: 'https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW58ZW58MHx8MHx8fDA%3D', name: 'women'},
    {src: 'https://plus.unsplash.com/premium_photo-1680012591126-13bd72f465b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDE%3D', name: 'women'},
    {src: 'https://plus.unsplash.com/premium_photo-1680111699826-a65396efe9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHwx', name: 'women'},
    {src: 'https://plus.unsplash.com/premium_photo-1680790392519-822f17a660fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHwx', name: 'women'},
    {src: 'https://plus.unsplash.com/premium_photo-1675034817400-fe04bdda8d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVufGVufDB8fDB8fHwx', name: 'women'},
    {src: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHwy', name: 'women'},
    {src: 'https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVufGVufDB8fDB8fHwy', name: 'women'},
    {src: 'https://images.unsplash.com/photo-1603977385628-d7e6d19f0370?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVufGVufDB8fDB8fHwy', name: 'women'},
    {src: 'https://images.unsplash.com/photo-1528812969535-4bcefc071532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVufGVufDB8fDB8fHwy', name: 'women'},
    {src: 'https://images.unsplash.com/photo-1560820038-9913cced7bc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8', name: 'women'},
    {src: 'https://images.unsplash.com/photo-1617638436040-76505e75940f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D', name: 'women'},
    {src: 'https://plus.unsplash.com/premium_photo-1682095988163-36aed833079a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D', name: 'women'},
  ]
  const imagesFamily = [
    {src: 'https://images.unsplash.com/photo-1643868420405-48e32c6f4620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmFtaWx5fGVufDB8fDB8fHwy', name: 'family'},
    {src: 'https://images.unsplash.com/photo-1643818657367-491080baeece?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmFtaWx5fGVufDB8fDB8fHwy', name: 'family'},
    {src: 'https://images.unsplash.com/photo-1628191013085-990d39ec25b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'family'},
    {src: 'https://images.unsplash.com/photo-1606787364410-947e10173148?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8', name: 'family'},
    {src: 'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8', name: 'family'},
    {src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D', name: 'family'},
    {src: 'https://images.unsplash.com/photo-1611024847487-e26177381a3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D', name: 'family'},
    {src: 'https://images.unsplash.com/photo-1543342384-1f1350e27861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D', name: 'family'},
    {src: 'https://images.unsplash.com/photo-1603367563698-67012943fd67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8', name: 'family'},
    {src: 'https://images.unsplash.com/photo-1603707176233-5ed2f7f21914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8', name: 'family'},
    {src: 'https://images.unsplash.com/photo-1543095834-7445b8af8c2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8', name: 'family'},
    {src: 'https://media.istockphoto.com/id/1198032866/photo/joyful-asian-family-holding-red-envelops-and-celebrating-chinese-new-year-together.webp?s=170667a&w=0&k=20&c=LJSxIa8qkCOqZq7XNqClw0j2jv1lE6iI005w53LYiFM=', name: 'family'},
  ]
  const imagesFriends = [
    {src: 'https://images.unsplash.com/photo-1591980607162-923fa31e8240?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyaWVuZHN8ZW58MHx8MHx8fDI%3D', name: 'friends'},
    {src: 'https://images.unsplash.com/photo-1588160049682-9761fcf4d70a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyaWVuZHN8ZW58MHx8MHx8fDI%3D', name: 'friends'},
    {src: 'https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', name: 'friends'},
    {src: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D', name: 'friends'},
    {src: 'https://images.unsplash.com/photo-1501238295340-c810d3c156d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8', name: 'friends'},
    {src: 'https://images.unsplash.com/photo-1491438685042-6e6d559f350a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D', name: 'friends'},
    {src: 'https://images.unsplash.com/photo-1633113214698-485cdb2f56fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', name: 'friends'},
    {src: 'https://images.unsplash.com/photo-1565870100382-f0a510db3cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8', name: 'friends'},
    {src: 'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8', name: 'friends'},
    {src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D', name: 'friends'},
    {src: 'https://images.unsplash.com/photo-1484712401471-05c7215830eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D', name: 'friends'},
    {src: 'https://plus.unsplash.com/premium_photo-1679415150568-03cfd3dd8293?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8', name: 'friends'},
  ]
  const imagesAnimals = [
    {src: 'https://media.istockphoto.com/id/1293981812/photo/wild-female-royal-bengal-tiger-resting-in-natural-green-background-at-ranthambore-national.jpg?s=612x612&w=0&k=20&c=XjKSb0iBLYWgE7mi4L0nJo5mfjRvkv_dF3FiTMNe1Cc=', name: 'animals'},
    {src: 'https://media.istockphoto.com/id/1354880099/photo/golden-retriever-puppy.webp?b=1&s=170667a&w=0&k=20&c=MvIVroOwBcpZ7FE2ezjxWoh3Wv_2kmTzzQ59e9Rg9BQ=', name: 'animals'},
    {src: 'https://media.istockphoto.com/id/992637094/photo/british-short-hair-cat-and-golden-retriever.webp?b=1&s=170667a&w=0&k=20&c=ilIykSGp9Eyg7vfc2yggmtrktZEbNPYJ8mDupQD6eMM=', name: 'animals'},
    {src: 'https://images.unsplash.com/photo-1661351701560-c1e5b41a0958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWxhc3xlbnwwfHwwfHx8Mg%3D%3D', name: 'animals'},
    {src: 'https://images.unsplash.com/photo-1568805778660-1600a6f5e2cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWxhc3xlbnwwfHwwfHx8Mg%3D%3D', name: 'animals'},
    {src: 'https://images.unsplash.com/photo-1700273021588-1336f476a8a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWxhc3xlbnwwfHwwfHx8Mg%3D%3D', name: 'animals'},
    {src: 'https://media.istockphoto.com/id/185501125/photo/peacock-displaying-tail-feathers.jpg?s=612x612&w=0&k=20&c=l6CVW2PUV7CDJ8gwwZkdujwZAqd-CsC3Tgbb1nRo7ZY=', name: 'animals'},
    {src: 'https://media.istockphoto.com/id/1302825382/photo/portrait-of-a-chimpanzee.jpg?s=612x612&w=0&k=20&c=mczL8aG56AVDfm0dfs6DaXox4rJEytn9xXJ9vu1uSLs=', name: 'animals'},
    {src: 'https://media.istockphoto.com/id/1353953270/photo/a-picture-of-a-gazelle-in-the-savanna.jpg?s=612x612&w=0&k=20&c=_etuEkkn2RRtqTbj-Cz-HoURgINA491NINScneA6eDk=', name: 'animals'},
    {src: 'https://media.istockphoto.com/id/531102883/photo/asian-elephant-in-the-wild.jpg?s=612x612&w=0&k=20&c=MaE4e8M83ByPrQ6oc9LA5knKp3zfMkIMOQtk1HYuyMo=', name: 'animals'},
    {src: 'https://media.istockphoto.com/id/692403138/photo/flamingos.jpg?s=612x612&w=0&k=20&c=fdHl2PkeI2hZHxSc0MX4DWBLKgVMHShxxFMFIZCNpb8=', name: 'animals'},
    {src: 'https://media.istockphoto.com/id/1225433854/photo/two-female-mother-lionesses-with-cubs-playing-with-lion-cubs.jpg?s=612x612&w=0&k=20&c=jMMvNy_mtSadQ7mYZ99qXNQPqQmP8YvHE3fJrti9XEk=', name: 'animals'},
  ]
  const imagesNature = [
    {src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1480499484268-a85a2414da81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1528724872435-8ce3a8ccbd9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1533656415749-6c07e8d9531b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1513911598410-dc4e7f182315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1519830103773-4bdc5166a0db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1487734092093-e5b02908580e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1483197452165-7abc4b248905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1497829352618-8528e15d7ce7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8', name: 'nature'},
    {src: 'https://images.unsplash.com/photo-1493589976221-c2357c31ad77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8', name: 'nature'},
  ];
  const gallery = document.querySelector('.gallery');
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-name');
      let selectedImages = [];
      switch (category) {
        case 'all':
          selectedImages = imagesAll;
          break;
        case 'men':
          selectedImages = imagesMen;
          break;
        case 'women':
          selectedImages = imagesWomen;
          break;
        case 'family':
          selectedImages = imagesFamily;
          break;
        case 'friends':
          selectedImages = imagesFriends;
          break;
        case 'animals':
          selectedImages = imagesAnimals;
          break;
        case 'nature':
          selectedImages = imagesNature;
          break;
        default:
          selectedImages = imagesAll;
        }
        gallery.innerHTML = '';
        selectedImages.forEach(image => {
          const imgContainer = document.createElement('div');
          imgContainer.classList.add('image-container');
          const img = document.createElement('img');
          img.src = image.src;
          img.classList.add('image');
          imgContainer.appendChild(img);
          gallery.appendChild(imgContainer);
        });
      });
    });
  });

