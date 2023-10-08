import { OccourrenceRepository } from "../../repository/occourrence";

class OccurenceService {
  repository = new OccourrenceRepository();

  async createOne(data: any) {
    const result = await this.repository.createOne(data);
    return result;
  }

  async findUnique(query: any) {
    const result = await this.repository.findUnique(query);
    return result;
  }

  async findMany(query: any) {
    const result = await this.repository.findMany(query);
    return result;
  }

  async findAll() {
    const result = await this.repository.findAll();
    return result;
  }


  async multer(data: any) {

    // const result = await this.repository.createOne(data);
    // salvar foto no google cloud

    const multer = Multer({
      storage: Multer.memoryStorage(),
      limits: {
        fileSize: 10 * 1024 * 1024, 
      },
    });

    const gCloud = new Storage({
      keyFilename: path.join(__dirname, '../../googlecloud/hip-gecko-401402-1bd276f77609.json'),
      projectId: 'hip-gecko-401402'
    })

    const irregularBucket = gCloud.bucket('irregular-app');

    multer.single(data.avatarUrl)

    const blob = irregularBucket.file(data.avatarUrl);
    const blobStream = blob.createWriteStream();
  
    const publicUrl = format(`https://storage.googleapis.com/${irregularBucket.name} / ${blob.name} `);
    
    return publicUrl;
  }

}

export const occurenceService = new OccurenceService()