//當月的月曆(list视图也同理)
const mockData = (params) => {
    // MOCL 后端接受入参进行数据库查询
    console.log(params);
    
    return new Promise(resolve=>{
        resolve (
            [
                {
                    "course_id": 12075,
                    "category_id": 15,
                    "category_name": "Tailor-made Orientation",
                    "title": "Scholar Intelligence Hub Tutorial",
                    "cdate": "2023-03-05",
                    "ctime": "14: 30 - 15: 30",
                    "category": "15",
                    "venue": "KB223,  2/F,  Knowles Building",
                    "description": "This is a description",
                    "instructor": "Jesse Xiao",
                    "Division": "Main Library",
                    "max": "0",
                    "wait": "0",
                    "enrolment": "11",
                    "attendance": "11",
                    "support_note": "support person name",
                    "type": "query"
                }
            ]        
        )
    })
}

export {
    mockData
}