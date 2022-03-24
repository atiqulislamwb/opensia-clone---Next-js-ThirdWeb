export const userSchema = {
     name: 'users',
     type: 'document',
     title: 'Users',
     fields: [
         {
             name:'name',
             type: 'string',
             title:'Name',
         },
         {
             name:"walletAddress",
             type: 'string',
             title:"Wallet Address",
         },
         {
            name:"profileImage",
            type:"image",
            title:"Profile image",
        },
    
        {
            name:"bannerImage",
            type:"image",
            title:"Banner Image",
        },
        {
            name:"twitterHandle",
            type:"string",
            title:"Twitter handle",

        },
        {
            name:"facebookHandle",
            type:"string",
            title:"Facebook handle",
        },
         {
            name: 'igHandle',
            title: 'Instagram Handle',
            type: 'string',
          },

     ]
}