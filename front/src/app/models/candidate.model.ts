export interface CandidateModel {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  firstname: string;
  lastname: string;
  image?: string;
  email: string;
  dateOfBirth: any;
  twitter: string;
  facebook: string;
  activities?: Array<ActivityModel>;
  electoral?: ElectoralModal;
  nbRate?: number;
  rating?: number;
}

export interface ActivityModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  startDate: Date;
  endDate: Date;
  type: string;
  description: string;
  medias?: Array<MediaSupportModel>;
}

export interface MediaSupportModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  url: string;
  type: string;
}

export interface ElectoralModal {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  description: string;
  location: string;
  image?: string;
  candidates?: Array<CandidateModel>;
}
