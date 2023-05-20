import { Logger } from "tslog";
import ConfigHandler from "./config/ConfigHandler";

import Posts from "./endpoints/Posts";

const config = ConfigHandler.getInstance();
const log = new Logger({
  minLevel: config.environmnetConfig.log_level,
  dateTimeTimezone:
    config.environmnetConfig.time_zone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone,
});

let posts: Posts;

describe("ddd-forum endpoint", (): void => {
  beforeAll(async (): Promise<void> => {
    posts = new Posts();
    
    log.debug("1. Posts Base url: "+posts.getBaseUrl());
    //console.log("1. Posts Base url: "+posts.getBaseUrl());
  });
  it("Get popular posts", async (): Promise<void> => {
    const response = await posts.getPopularPosts();
    expect(response.status).toBe(200);
    
    expect(response.data.posts).toBeDefined();
    /*
    expect(response.data.icon_url).toBeDefined();
    expect(response.data.id).toBeDefined();
    expect(response.data.updated_at).toBeDefined();
    expect(response.data.url).toBeDefined();
    expect(response.data.value).toBeDefined();
    expect(response.data.value).toContain("Chuck Norris");
    */
  });
});
