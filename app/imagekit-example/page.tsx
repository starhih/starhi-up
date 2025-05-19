import ImageKitExample from '@/components/examples/ImageKitExample';

export const metadata = {
  title: 'ImageKit Example - Star Hi Herbs',
  description: 'Example page demonstrating ImageKit integration for optimized image delivery',
};

export default function ImageKitExamplePage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">ImageKit Integration</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            This page demonstrates how to use ImageKit for optimized image delivery in the Star Hi Herbs website.
          </p>
        </div>
        
        <div className="py-6">
          <ImageKitExample />
        </div>
        
        <div className="max-w-3xl mx-auto prose">
          <h2>How It Works</h2>
          <p>
            The Star Hi Herbs website uses ImageKit to optimize and deliver images through a global CDN.
            This provides several benefits:
          </p>
          
          <ul>
            <li>Faster image loading times</li>
            <li>Automatic image optimization</li>
            <li>On-the-fly image transformations</li>
            <li>Reduced bandwidth usage</li>
            <li>Better user experience</li>
          </ul>
          
          <h2>Implementation</h2>
          <p>
            We've created a custom Image component that automatically routes all image requests through ImageKit.
            This component extends the Next.js Image component with ImageKit integration.
          </p>
          
          <pre><code>{`import Image from '@/components/ui/image';

// Basic usage
<Image src="/images/hero/about-us.jpg" alt="About Us" width={1200} height={600} />

// With transformations
<Image src="/images/products/product1.jpg" 
  alt="Product" 
  width={300} 
  height={300}
  transformations={{ w: 300, h: 300, c: 'maintain_ratio' }} 
/>`}</code></pre>
          
          <h2>Available Transformation Presets</h2>
          <p>
            The <code>ImageKitTransformations</code> object provides common transformation presets:
          </p>
          
          <ul>
            <li><code>thumbnail</code>: 300x300px, maintain aspect ratio</li>
            <li><code>small</code>: 600px width, maintain aspect ratio</li>
            <li><code>medium</code>: 1200px width, maintain aspect ratio</li>
            <li><code>large</code>: 1800px width, maintain aspect ratio</li>
            <li><code>hero</code>: 1920px width, 90% quality, maintain aspect ratio</li>
            <li><code>blur</code>: Apply a blur effect</li>
            <li><code>grayscale</code>: Convert to grayscale</li>
          </ul>
          
          <h2>Learn More</h2>
          <p>
            For more information on how to use ImageKit in this project, refer to the 
            <a href="https://github.com/starhih/starhi-up/blob/main/IMAGEKIT_SETUP.md"> IMAGEKIT_SETUP.md</a> file.
          </p>
        </div>
      </div>
    </div>
  );
}
