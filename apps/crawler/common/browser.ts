import puppeteer, {
    Browser as PupBrowser,
    PuppeteerLaunchOptions,
} from "puppeteer";
export class Browser {
    instance: Promise<PupBrowser>;
    opts: PuppeteerLaunchOptions = {
        headless: "shell",
        args: [
            // "--no-sandbox",
            // "--disable-setuid-sandbox",
            // "--disable-dev-shm-usage",
            // "--disable-accelerated-2d-canvas",
            // "--no-first-run",
            // "--no-zygote",
            // "--single-process",
            // "--disable-gpu",
        ],
    };
    constructor() {
        this.instance = puppeteer.launch(this.opts)
    }

    async newPage(url: string) {
        const instance = await this.instance
        const page = await instance.newPage()
        return await page.goto(url, { waitUntil: "domcontentloaded" })
    }
}
