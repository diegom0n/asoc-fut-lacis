'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { brandColors, colorClasses, colorCombinations } from '@/lib/colors'

interface ColorSwatchProps {
  color: string
  name: string
  shade: string
}

function ColorSwatch({ color, name, shade }: ColorSwatchProps) {
  return (
    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <div 
        className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
        style={{ backgroundColor: color }}
      />
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          {name}-{shade}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">
          {color}
        </div>
      </div>
    </div>
  )
}

export function ColorShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          AFC La Cisterna Color System
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Comprehensive brand color palette with semantic meanings and consistent usage across the application.
        </p>
      </div>

      {/* Color Families */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {Object.entries(brandColors).map(([familyName, shades]) => (
          <Card key={familyName}>
            <CardHeader>
              <CardTitle className="capitalize">{familyName} Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.entries(shades).map(([shade, color]) => (
                <ColorSwatch
                  key={`${familyName}-${shade}`}
                  color={color}
                  name={familyName}
                  shade={shade}
                />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Usage Examples */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Usage Examples
        </h2>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Button Variations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${colorCombinations.primaryButton.base} ${colorCombinations.primaryButton.hover}`}>
                Primary Button
              </button>
              <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${colorCombinations.secondaryButton.base} ${colorCombinations.secondaryButton.hover}`}>
                Secondary Button
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-brand-accent-600 text-white hover:bg-brand-accent-700">
                Success Button
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-brand-danger-600 text-white hover:bg-brand-danger-700">
                Danger Button
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-brand-warning-600 text-white hover:bg-brand-warning-700">
                Warning Button
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-brand-info-600 text-white hover:bg-brand-info-700">
                Info Button
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Status Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Status Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className={`p-4 rounded-lg ${colorCombinations.success.bg} ${colorCombinations.success.border} border`}>
                <div className={`font-semibold ${colorCombinations.success.text}`}>Success</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Operation completed successfully</div>
              </div>
              <div className={`p-4 rounded-lg ${colorCombinations.error.bg} ${colorCombinations.error.border} border`}>
                <div className={`font-semibold ${colorCombinations.error.text}`}>Error</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Something went wrong</div>
              </div>
              <div className={`p-4 rounded-lg ${colorCombinations.warning.bg} ${colorCombinations.warning.border} border`}>
                <div className={`font-semibold ${colorCombinations.warning.text}`}>Warning</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Please review this action</div>
              </div>
              <div className={`p-4 rounded-lg ${colorCombinations.info.bg} ${colorCombinations.info.border} border`}>
                <div className={`font-semibold ${colorCombinations.info.text}`}>Info</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Additional information available</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Text Colors */}
        <Card>
          <CardHeader>
            <CardTitle>Text Color Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-brand-primary-600 dark:text-brand-primary-400 text-lg font-semibold">
                Primary brand text color
              </p>
              <p className="text-brand-secondary-600 dark:text-brand-secondary-400 text-lg font-semibold">
                Secondary brand text color
              </p>
              <p className="text-brand-accent-600 dark:text-brand-accent-400 text-lg font-semibold">
                Accent text color for success states
              </p>
              <p className="text-brand-danger-600 dark:text-brand-danger-400 text-lg font-semibold">
                Danger text color for errors
              </p>
              <p className="text-brand-warning-600 dark:text-brand-warning-400 text-lg font-semibold">
                Warning text color for cautions
              </p>
              <p className="text-brand-info-600 dark:text-brand-info-400 text-lg font-semibold">
                Info text color for information
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Background Colors */}
        <Card>
          <CardHeader>
            <CardTitle>Background Color Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(brandColors).map(([familyName, shades]) => (
                <div key={familyName} className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white capitalize">
                    {familyName}
                  </h4>
                  <div className="space-y-1">
                    {[100, 300, 500, 700, 900].map((shade) => (
                      <div
                        key={shade}
                        className={`h-8 rounded border border-gray-200 dark:border-gray-700 bg-brand-${familyName}-${shade}`}
                        title={`${familyName}-${shade}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Guidelines */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Usage Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Color Meanings</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Primary (Blue):</strong> Main brand color, primary actions, links</li>
                <li><strong>Secondary (Yellow):</strong> Accent color, highlights, secondary actions</li>
                <li><strong>Accent (Green):</strong> Success states, positive feedback, confirmations</li>
                <li><strong>Danger (Red):</strong> Error states, destructive actions, warnings</li>
                <li><strong>Warning (Orange):</strong> Caution states, important notices</li>
                <li><strong>Info (Cyan):</strong> Informational content, neutral highlights</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Best Practices</h3>
              <ul className="space-y-2 text-sm">
                <li>Use lighter shades (50-200) for backgrounds</li>
                <li>Use medium shades (400-600) for interactive elements</li>
                <li>Use darker shades (700-950) for text and borders</li>
                <li>Maintain sufficient contrast ratios for accessibility</li>
                <li>Use semantic colors consistently across the application</li>
                <li>Test colors in both light and dark themes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}