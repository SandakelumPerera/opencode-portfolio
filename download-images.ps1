$images = @(
    @{url='https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80'; name='hero-bg.jpg'},
    @{url='https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80'; name='aether-commerce.jpg'},
    @{url='https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80'; name='aether-storefront.jpg'},
    @{url='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'; name='aether-product.jpg'},
    @{url='https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80'; name='aether-checkout.jpg'},
    @{url='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80'; name='pulse-financial.jpg'},
    @{url='https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'; name='pulse-executive.jpg'},
    @{url='https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'; name='pulse-charts.jpg'},
    @{url='https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'; name='pulse-workspaces.jpg'},
    @{url='https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80'; name='orbit-studio.jpg'},
    @{url='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'; name='orbit-home.jpg'},
    @{url='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80'; name='orbit-cases.jpg'},
    @{url='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'; name='orbit-about.jpg'},
    @{url='https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80'; name='northwind-ai.jpg'},
    @{url='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'; name='northwind-console.jpg'},
    @{url='https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'; name='northwind-reasoning.jpg'},
    @{url='https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80'; name='northwind-analytics.jpg'},
    @{url='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80'; name='lucida-docs.jpg'},
    @{url='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'; name='lucida-interactive.jpg'},
    @{url='https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80'; name='lucida-playground.jpg'},
    @{url='https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'; name='lucida-search.jpg'},
    @{url='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80'; name='haven-health.jpg'},
    @{url='https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80'; name='haven-portal.jpg'},
    @{url='https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80'; name='haven-scheduling.jpg'},
    @{url='https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80'; name='haven-staff.jpg'},
    @{url='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80'; name='mono-ui.jpg'},
    @{url='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'; name='mono-primitives.jpg'},
    @{url='https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80'; name='mono-theming.jpg'},
    @{url='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'; name='mono-docs.jpg'},
    @{url='https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80'; name='verbana.jpg'},
    @{url='https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80'; name='verbana-home.jpg'},
    @{url='https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'; name='verbana-article.jpg'},
    @{url='https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'; name='verbana-topics.jpg'},
    @{url='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=600&q=80'; name='maya-chen.jpg'},
    @{url='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=600&q=80'; name='jonas-reyes.jpg'},
    @{url='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&crop=faces&w=600&q=80'; name='priya-nair.jpg'},
    @{url='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&crop=faces&w=600&q=80'; name='sam-okafor.jpg'},
    @{url='https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80'; name='whisper-motion.jpg'},
    @{url='https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'; name='whisper-ai.jpg'},
    @{url='https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80'; name='whisper-webgl.jpg'},
    @{url='https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80'; name='whisper-empty.jpg'},
    @{url='https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80'; name='whisper-tokens.jpg'},
    @{url='https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'; name='whisper-resume.jpg'}
)

$images | ForEach-Object {
    $path = 'public\images\' + $_.name
    if (-not (Test-Path $path)) {
        try {
            Invoke-WebRequest -Uri $_.url -OutFile $path -UseBasicParsing
            Write-Host "Downloaded: $($_.name)"
        } catch {
            Write-Host "Failed: $($_.name) - $($_.Exception.Message)"
        }
    } else {
        Write-Host "Exists: $($_.name)"
    }
}