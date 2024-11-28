export const allPost = [
    {
        "data": [
            {
                "id": 2,
                "imgPath" : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "post": "I'm Going to North India soon, Please suggest me best Spots to visit!!!",
                "likes": 2,
                // "comments": 3,
                "created_at": "7 minutes ago",
                "created_date": "28-Nov-24, 06:31AM",
                "created_by": "Rohan",
                "comments": [
                    {
                        "id": 2,
                        "comment": "go to Delhi Gate 😊",
                        "created_at": "23 seconds ago",
                        "created_date": "28-Nov-24, 06:34AM",
                        "created_by": "ABC",
                        "imgPath" : "https://tailwindui.com/plus/img/avatar-1.jpg"
                    },
                    {
                        "id": 1,
                        "comment": "I remember last i was visited Taj Mahal the 7th wonder of world 💖 !!!",
                        "created_at": "23 seconds ago",
                        "created_date": "28-Nov-24, 06:34AM",
                        "created_by": "LMN",
                        "imgPath" : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
                    }
                ]
            },
            {
                "id": 1,
                "imgPath" : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
                "post": "Today AI model 40-mini integrated has launch new version with additional features and with more robust",
                "likes": 1,
                // "comments": 1,
                "created_at": "22 minutes ago",
                "created_date": "28-Nov-24, 06:16AM",
                "created_by": "LMN",
                "comments": [
                    {
                        "id": 2,
                        "comment": "Brilliant!!!",
                        "created_at": "2 seconds ago",
                        "created_date": "28-Nov-24, 06:34AM",
                        "created_by": "Rohan",
                        "imgPath" : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    },
                    {
                        "id": 1,
                        "comment": "Wow 💖 !!!",
                        "created_at": "18 seconds ago",
                        "created_date": "28-Nov-24, 06:34AM",
                        "created_by": "ABC",
                        "imgPath" : "https://tailwindui.com/plus/img/avatar-1.jpg"
                    }
                ]
            }
        ],
        "links": {
            "self": "link-value",
            "first": "http://127.0.0.1:8000/api/allPost?page=1",
            "last": "http://127.0.0.1:8000/api/allPost?page=1",
            "prev": null,
            "next": null
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 1,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://127.0.0.1:8000/api/allPost?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": null,
                    "label": "Next &raquo;",
                    "active": false
                }
            ],
            "path": "http://127.0.0.1:8000/api/allPost",
            "per_page": 5,
            "to": 2,
            "total": 2
        }
    }
]; 

export const getSinglePost = [
    {
        "data": {
            "id": 1,
            "post": "Today AI model 40-mini integrated has launch new version with additional features and with more robust",
            "likes": 1,
            "created_at": "3 minutes ago",
            "created_date": "28-Nov-24, 06:31AM",
            "created_by": "LMN",
            "comments": [
                {
                    "id": 1,
                    "comment": "grt",
                    "created_at": "23 seconds ago",
                    "created_date": "28-Nov-24, 06:34AM",
                    "created_by": "LMN"
                }
            ]
        }
    }
];