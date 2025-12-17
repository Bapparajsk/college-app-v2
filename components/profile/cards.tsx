import { sampleProjects } from '@/data/sampleProjects'
import { FlashList } from '@shopify/flash-list'
import React from 'react'
import ProjectCard from '../ui/project-card'

export default function Cards() {
    return (
        <FlashList
            data={sampleProjects}
            renderItem={({ item }) => <ProjectCard {...item} />}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingVertical: 20, }}
        />
    )
}