//export const Data: Array<FlowchartItem> = [
//    {
//        title: "Confirmed launch of Russian nuclear weapons at American home territory",
//        choices: [
//            {
//                title: "yes",
//                choices: []
//            },
//            {
//                title: "no",
//                choices: [

//                ]
//            }
//        ]

//    }
//];

export const Data: Array<FlowchartItem> = [
    {
        title: "Starting Choices",
        choices: [
            {
                title: "Confirmed launch of Russian nuclear weapons",
                choices: [
                    {
                        title: "Destination?",
                        choices: [
                            {
                                title: "American home territory",
                                choices: [
                                    {
                                        title: "Launch full scale retaliation at Russia and prepare for war with Russia",
                                        choices: []
                                    }
                                ]
                            },
                            {
                                title: "China",
                                choices: [
                                    {
                                        title: "Enter DEFCON 3",
                                        choices: []
                                    }
                                ]
                            },
                            {
                                title: "NATO Member and America is still in NATO",
                                choices: [
                                    {
                                        title: "Enter DEFCON 3 and call attacked nation for permission to launch full scale retaliation at Russia and prepare for war with Russia (If I'm going to end the world on there behalf, I want there agreement)",
                                        choices: [
                                            {
                                                title: "Get Permission",
                                                choices: [
                                                    {
                                                        title: "Launch full scale retaliation at Russia and prepare for war with Russia",
                                                        choices: []
                                                    }
                                                ]
                                            },                                            
                                            {
                                                title: "Denied Permission",
                                                choices: [
                                                    {
                                                        title: "Prepare for war with Russia",
                                                        choices: []
                                                    }
                                                ]
                                            },
                                            {
                                                title: "Cannot Contact",
                                                choices: [
                                                    {
                                                        title: "Launch full scale retaliation at Russia and prepare for war with Russia",
                                                        choices: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }                                                                
                        ]                                           
                    }
                ]
            },
            {
                title: "Aliens: First Contact",
                choices: [
                    {
                        title: "This part of the flowchart is under construction",
                        choices: []
                    }
                ]
            }
        ]

    }
];