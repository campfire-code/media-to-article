/**
 * 项目统一配置文件
 * 从环境变量中读取配置
 */

// API服务基础URL
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080'  // 篝火：Docker 镜像构建时设为空字符串，前端与后端同源

