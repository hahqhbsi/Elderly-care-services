const menu = {
    list() {
        return [
    {
        "backMenu":[
            // {
            //     "child":[
            //         {
            //             "buttons":[
            //                 "查看",
            //                 "新增",
            //                 "修改",
            //                 "删除"
            //             ],
            //             "menu":"管理员管理",
            //             "menuJump":"列表",
            //             "tableName":"users"
            //         }
            //     ],
            //     "menu":"管理员管理"
            // },
             {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"服务类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryFuwu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                ],
                "menu":"基础数据管理"
            },
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"服务信息管理",
                        "menuJump":"列表",
                        "tableName":"fuwu"
                    }
                ],
                "menu":"服务信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核",
                            "删除"
                        ],
                        "menu":"服务申请管理",
                        "menuJump":"列表",
                        "tableName":"fuwushenqing"
                    }
                ],
                "menu":"服务申请管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息管理"
            }
            // ,{
            //     "child":[
            //         {
            //             "buttons":[
            //                 "查看",
            //                 "新增",
            //                 "修改",
            //                 "删除"
            //             ],
            //             // "menu":"用户管理",
            //             "menuJump":"列表",
            //             "tableName":"yonghu"
            //         }
            //     ],
            //     "menu":"用户管理"
            // }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核",
                            "删除"
                        ],
                        "menu":"用户信息修改审核管理",
                        "menuJump":"列表",
                        "tableName":"yonghushenhe"
                    }
                ],
                "menu":"用户信息修改审核管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"服务信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fuwu"
	                }
	            ],
	            "menu":"服务信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "删除"
	                    ],
	                    "menu":"服务申请管理",
	                    "menuJump":"列表",
	                    "tableName":"fuwushenqing"
	                }
	            ],
	            "menu":"服务申请管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "删除"
	                    ],
	                    "menu":"用户信息修改审核管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghushenhe"
	                }
	            ],
	            "menu":"用户信息修改审核管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"用户",
	    "tableName":"yonghu"
	}
]
    }
}
export default menu;
