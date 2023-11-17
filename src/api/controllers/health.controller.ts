import { Get, JsonController } from 'routing-controllers';

// router.get('/health', (req: Request, res: Response) => {
//     res.json({ status: 'OK!' });
// });

@JsonController('/health')
export class HealthController {
    @Get()
    get() {
        return {
            'status': 'OK!'
        };
    }
}

