'use client';

import Image from '@/components/ui/image';
import { getImageKitUrl, ImageKitTransformations } from '@/lib/imagekit';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * Example component demonstrating how to use ImageKit with our custom Image component
 */
export default function ImageKitExample() {
  // Example image path
  const imagePath = '/images/hero/about-us.jpg';
  
  // Get direct ImageKit URLs for demonstration
  const originalUrl = getImageKitUrl(imagePath);
  const thumbnailUrl = getImageKitUrl(imagePath, ImageKitTransformations.thumbnail);
  const grayscaleUrl = getImageKitUrl(imagePath, ImageKitTransformations.grayscale);
  const customUrl = getImageKitUrl(imagePath, { w: 600, h: 400, c: 'maintain_ratio', q: 80 });
  
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>ImageKit Integration Example</CardTitle>
        <CardDescription>
          Demonstrating how to use ImageKit with our custom Image component
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="component">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="component">Component Usage</TabsTrigger>
            <TabsTrigger value="urls">Direct URLs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="component" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Original Image</h3>
                <Image 
                  src={imagePath} 
                  alt="Original Image" 
                  width={600} 
                  height={400} 
                  className="rounded-md"
                />
                <p className="text-sm text-gray-500">
                  <code>{`<Image src="${imagePath}" alt="Original" width={600} height={400} />`}</code>
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Thumbnail</h3>
                <Image 
                  src={imagePath} 
                  alt="Thumbnail" 
                  width={300} 
                  height={300} 
                  transformations={ImageKitTransformations.thumbnail}
                  className="rounded-md"
                />
                <p className="text-sm text-gray-500">
                  <code>{`<Image src="${imagePath}" alt="Thumbnail" width={300} height={300} transformations={ImageKitTransformations.thumbnail} />`}</code>
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Grayscale</h3>
                <Image 
                  src={imagePath} 
                  alt="Grayscale" 
                  width={600} 
                  height={400} 
                  transformations={ImageKitTransformations.grayscale}
                  className="rounded-md"
                />
                <p className="text-sm text-gray-500">
                  <code>{`<Image src="${imagePath}" alt="Grayscale" width={600} height={400} transformations={ImageKitTransformations.grayscale} />`}</code>
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Custom Transformations</h3>
                <Image 
                  src={imagePath} 
                  alt="Custom" 
                  width={600} 
                  height={400} 
                  transformations={{ w: 600, h: 400, c: 'maintain_ratio', q: 80 }}
                  className="rounded-md"
                />
                <p className="text-sm text-gray-500">
                  <code>{`<Image src="${imagePath}" alt="Custom" width={600} height={400} transformations={{ w: 600, h: 400, c: 'maintain_ratio', q: 80 }} />`}</code>
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="urls" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Original URL</h3>
                <div className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                  <code className="text-sm">{originalUrl}</code>
                </div>
                <img 
                  src={originalUrl} 
                  alt="Original" 
                  className="rounded-md w-full h-auto"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Thumbnail URL</h3>
                <div className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                  <code className="text-sm">{thumbnailUrl}</code>
                </div>
                <img 
                  src={thumbnailUrl} 
                  alt="Thumbnail" 
                  className="rounded-md w-full h-auto"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Grayscale URL</h3>
                <div className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                  <code className="text-sm">{grayscaleUrl}</code>
                </div>
                <img 
                  src={grayscaleUrl} 
                  alt="Grayscale" 
                  className="rounded-md w-full h-auto"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Custom URL</h3>
                <div className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                  <code className="text-sm">{customUrl}</code>
                </div>
                <img 
                  src={customUrl} 
                  alt="Custom" 
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
