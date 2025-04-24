export interface University {
    id: string,
    name: string,
    city: string,
    overview: string,
    ranking: string,
    tuition: string,
    scholarship: string,
    type: string,
    website: string,
}

export interface Major {
    uni_id: string,
    major: string,
    degree: string,
    duration: string,
    credits: string,
    applicationPeriod: string,
    language: string,
    studyField: string,
    tuition: string,
    description: string,
    website: string,
    fieldOptions: Array<string>
}